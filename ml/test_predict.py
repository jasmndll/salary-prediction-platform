import pytest
from ml.predict import predict

@pytest.fixture
def valid_payload():
    return {
        "Country": "United States of America",
        "Education": "Bachelor's degree",
        "Role": "Developer, full-stack",
        "RemoteWork": "Remote",
        "OrgSize": "100 to 499 employees",
        "Experience_Years": 10.0,
        "Work_Experience_Years": 8.0,
        "JavaScript": 1,
        "HTML/CSS": 1,
        "SQL": 1,
        "Python": 1,
        "Bash/Shell (all shells)": 1,
        "TypeScript": 1,
        "C#": 0,
        "Java": 0,
        "PowerShell": 0,
        "C++": 0,
        "Go": 0,
        "C": 0,
        "PHP": 0,
        "Rust": 0,
        "Kotlin": 0
    }


def test_valid_payload(valid_payload):
    result = predict(valid_payload)
    assert isinstance(result, dict)
    assert "p25" in result
    assert "p50" in result
    assert "p75" in result
    assert "currency" in result
    assert "period" in result

    # Check monotonic quantile ordering
    assert result["p25"] <= result["p50"] <= result["p75"]
    assert result["currency"] == "USD"
    assert result["period"] == "year"

    # Values rounded to nearest 100
    assert result["p25"] % 100 == 0
    assert result["p50"] % 100 == 0
    assert result["p75"] % 100 == 0


def test_unknown_country(valid_payload):
    payload = valid_payload.copy()
    payload["Country"] = "Atlantis"
    with pytest.raises(ValueError, match="Unknown category for 'Country'"):
        predict(payload)


def test_missing_field(valid_payload):
    payload = valid_payload.copy()
    del payload["Role"]
    with pytest.raises(ValueError, match="Missing required field: 'Role'"):
        predict(payload)


def test_missing_language_field(valid_payload):
    payload = valid_payload.copy()
    del payload["Python"]
    with pytest.raises(ValueError, match="Missing required field: 'Python'"):
        predict(payload)


def test_experience_out_of_range(valid_payload):
    # Below minimum
    payload_low = valid_payload.copy()
    payload_low["Experience_Years"] = 0.5
    with pytest.raises(ValueError, match="out of allowed range"):
        predict(payload_low)

    # Above maximum
    payload_high = valid_payload.copy()
    payload_high["Experience_Years"] = 150.0
    with pytest.raises(ValueError, match="out of allowed range"):
        predict(payload_high)


def test_work_experience_out_of_range(valid_payload):
    payload = valid_payload.copy()
    payload["Work_Experience_Years"] = -1.0
    with pytest.raises(ValueError, match="out of allowed range"):
        predict(payload)


def test_invalid_language_value(valid_payload):
    payload = valid_payload.copy()
    payload["Java"] = 5
    with pytest.raises(ValueError, match="out of allowed range"):
        predict(payload)
