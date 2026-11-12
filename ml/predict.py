import os
import json
import joblib
import numpy as np
import pandas as pd

# Path configuration
_CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
_ARTIFACTS_DIR = os.path.join(_CURRENT_DIR, "artifacts")
_MODEL_PATH = os.path.join(_ARTIFACTS_DIR, "salary_model.joblib")
_SCHEMA_PATH = os.path.join(_ARTIFACTS_DIR, "schema.json")

# Module-level caching for model artifact and schema
_ARTIFACT = None
_SCHEMA = None


def _load_artifacts():
    global _ARTIFACT, _SCHEMA
    if _ARTIFACT is None:
        if not os.path.exists(_MODEL_PATH):
            raise FileNotFoundError(f"Model artifact not found at {_MODEL_PATH}")
        _ARTIFACT = joblib.load(_MODEL_PATH)
    if _SCHEMA is None:
        if not os.path.exists(_SCHEMA_PATH):
            raise FileNotFoundError(f"Schema artifact not found at {_SCHEMA_PATH}")
        with open(_SCHEMA_PATH, "r", encoding="utf-8") as f:
            _SCHEMA = json.load(f)
    return _ARTIFACT, _SCHEMA


def validate_payload(payload: dict, schema: dict, feature_columns: list) -> None:
    """Validate payload fields, categories, and numeric bounds against schema.json."""
    if not isinstance(payload, dict):
        raise ValueError(f"Payload must be a dictionary, got {type(payload).__name__}")

    # Check for missing required fields
    for col in feature_columns:
        if col not in payload:
            raise ValueError(f"Missing required field: '{col}'")

    # Validate categorical fields against allowed categories from training data
    for col, allowed_categories in schema.get("categorical", {}).items():
        val = payload[col]
        if str(val) not in allowed_categories:
            raise ValueError(
                f"Unknown category for '{col}': '{val}'. Allowed categories are: {allowed_categories}"
            )

    # Validate numeric fields against min and max bounds
    for col, bounds in schema.get("numeric", {}).items():
        val = payload[col]
        if isinstance(val, bool) or not isinstance(val, (int, float)):
            raise ValueError(f"Numeric field '{col}' must be a number, got {type(val).__name__}")
        min_val = bounds["min"]
        max_val = bounds["max"]
        if val < min_val or val > max_val:
            raise ValueError(
                f"Numeric field '{col}' value {val} is out of allowed range [{min_val}, {max_val}]"
            )


def predict(payload: dict) -> dict:
    """Predict salary quantiles (p25, p50, p75) from an input payload.
    
    Validates input against schema.json, enforces monotonic ordering across quantiles,
    and returns predictions rounded to the nearest 100 in USD per year.
    """
    artifact, schema = _load_artifacts()
    feature_columns = artifact["feature_columns"]
    models = artifact["models"]

    # Validate input
    validate_payload(payload, schema, feature_columns)

    # Prepare DataFrame matching the exact feature order
    input_data = {col: [payload[col]] for col in feature_columns}
    df_input = pd.DataFrame(input_data)

    # Predict log-scale and convert back via np.exp
    raw_preds = [
        float(np.exp(models["q25"].predict(df_input)[0])),
        float(np.exp(models["q50"].predict(df_input)[0])),
        float(np.exp(models["q75"].predict(df_input)[0]))
    ]

    # Enforce monotonic ascending order
    sorted_preds = sorted(raw_preds)

    # Round to nearest 100
    p25 = int(round(sorted_preds[0], -2))
    p50 = int(round(sorted_preds[1], -2))
    p75 = int(round(sorted_preds[2], -2))

    return {
        "p25": p25,
        "p50": p50,
        "p75": p75,
        "currency": "USD",
        "period": "year"
    }


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python ml/predict.py <path_to_payload_json>")
        sys.exit(1)

    json_path = sys.argv[1]
    if not os.path.exists(json_path):
        print(f"Error: file not found at {json_path}")
        sys.exit(1)

    with open(json_path, "r", encoding="utf-8") as f:
        payload_data = json.load(f)

    result = predict(payload_data)
    print(json.dumps(result, indent=2))
