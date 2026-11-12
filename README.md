# Salary Prediction Platform

Predicts a developer's yearly salary (USD) from survey answers such as country, role, experience, company size and remote work. A machine learning model is trained on the Stack Overflow Developer Survey 2025 and served through a Spring Boot REST API.

The project was built for a predictive analysis course. It has two parts: a Python machine learning pipeline and a Java backend that serves it.

## Status

- [x] Data cleaning and exploratory analysis
- [x] Baseline, Ridge, Random Forest and gradient boosting models with cross-validation
- [x] Error analysis: per-country error, permutation importance, residuals
- [ ] Language-feature experiment
- [ ] Quantile models (salary range) and model export
- [ ] Spring Boot API with PostgreSQL
- [ ] Authentication, caching, Docker, CI
- [ ] Deployment and demo

## Data

Source: [Stack Overflow Developer Survey 2025](https://github.com/StackExchange/Survey), files `results` and `schema` from the 2025 archive folder. In this repo they are stored in `data/` as `results.txt` and `schema.txt`; both are comma-separated files despite the extension.

The data is licensed by Stack Exchange under the Open Database License (ODbL) 1.0, with contents under the Database Contents License 1.0. This project uses the data under those terms. The raw and processed data files are not committed to this repository, so download them yourself and place them in `data/`.

Cohort used for modeling:
- respondents whose employment status is "Employed"
- yearly compensation in USD between 10,000 and 350,000
- about 17,000 rows after removing rows with missing feature values

Features: country, education, developer role, years of coding experience, years of professional work experience, remote work type, organization size. Rare countries and roles are grouped into "Other".

Cleaning decisions are explained in the notebooks. One known limitation is described below under "Limitations": the 10,000 USD floor removes some genuine salaries, mostly from lower-income countries.

## Approach

1. Exploratory analysis and cleaning (`notebooks/salary_prediction_eda.ipynb`)
2. Median baseline and Ridge regression on log-transformed salary (`notebooks/03_baseline.ipynb`)
3. Ridge, Random Forest and HistGradientBoosting compared with 5-fold cross-validation on the training set (`notebooks/04_models.ipynb`)
4. Fair tuning, per-country error, permutation importance and residual analysis (`notebooks/05_interpretation.ipynb`)
5. Language features experiment (`notebooks/06_language_features.ipynb`)
6. Quantile models for a salary range, then export (`notebooks/07_final_model.ipynb`, `ml/`)

All models use the same 80/20 split (`random_state=42`). Models are selected by cross-validation only, and the test set is used once for the final evaluation.

## Results

Test set, salary in USD:

| Model | MAE | RMSE | R² |
|---|---|---|---|
| Median baseline | 45,847 | 62,496 | -0.04 |
| Ridge (log target) | 28,514 | 42,874 | 0.51 |
| HistGradientBoosting (log target) | 26,476 | 40,094 | 0.57 |

These numbers will be updated after the final export. Country is by far the most important feature in permutation importance, followed by years of professional experience.

Median absolute percentage error by country, from `05_interpretation.ipynb`:

| Country | MdAPE |
|---|---|
| Germany | 17.6% |
| United States | 21.6% |
| United Kingdom | 21.7% |
| Poland | 24.4% |
| India | 33.9% |
| Brazil | 37.0% |

## Limitations

- Salary floor: the 10,000 USD lower bound removes a large share of rows in some countries (for example India), so the model has not seen those developers. Because the test set has the same floor, this bias cannot be measured with it.
- Compression of extremes: the model under-predicts high salaries and over-predicts low ones. For actual salaries above 200,000 USD the mean residual was about 94,760 USD (actual minus predicted).
- Wide relative error in some countries, which is why the API returns a range instead of a single number.
- Rare-category grouping rules (country and role) were computed on the full dataset before the train/test split, which is a small leak.
- Survey salaries are self-reported and the seven input features cannot capture employer, negotiation or specific skills.

## Architecture (planned)

```
Client / Swagger UI
        |
Spring Boot API  --->  PostgreSQL  (users, prediction history)
  JWT auth,
  validation,      --->  Model service
  caching                (FastAPI wrapping ml/predict.py)
```

The model returns three quantiles (25th, 50th and 75th percentile) so the API can respond with a range. A possible later change is to run an ONNX export of the pipeline directly inside the Spring Boot service and drop the Python service.

Planned endpoints:

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Create an account |
| POST | `/api/auth/login` | Get a JWT |
| GET | `/api/options` | Allowed values for each input field |
| POST | `/api/predictions` | Predict a salary range and store the request |
| GET | `/api/predictions` | Paginated prediction history for the user |

## Repository layout

```
data/            raw and cleaned data (not committed)
notebooks/       analysis and modeling notebooks
ml/              training export, predict.py, schema.json, tests
backend/         Spring Boot application (planned)
.github/         CI workflows (planned)
docker-compose.yml   API, database and model service (planned)
```

## Running the ML part

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r ml/requirements.txt
pip install jupyter matplotlib seaborn
```

Download the survey files, save them as `data/results.txt` and `data/schema.txt`, then run the notebooks in order. After running `07_final_model.ipynb`:

```bash
python ml/predict.py example_payload.json
pytest ml/
```

## Running the backend

To be added once the backend is built.

## Tech stack

- Machine learning: Python, pandas, NumPy, scikit-learn, matplotlib
- Backend: Java 21, Spring Boot, Spring Data JPA, Spring Security (JWT), PostgreSQL, Flyway
- Testing and delivery: JUnit 5, Mockito, Testcontainers, Docker, GitHub Actions

## License

Code: MIT (see `LICENSE`). Data: Stack Overflow Developer Survey 2025, (c) Stack Exchange, Inc., licensed under ODbL 1.0.