# Digital Chemistry & Agriculture Laboratory (African Innovation)

## 1) System Architecture

### A. Layered architecture

1. **Data Layer**
   - Sources: lab measurements, field sensors, weather APIs, wastewater plant logs, solar irradiance datasets, literature constants.
   - Storage:
     - PostgreSQL + TimescaleDB (time-series experiments and sensor data)
     - Object storage (CSV/Parquet model inputs/outputs)
     - Metadata registry (experiment conditions, instrument calibration, provenance)
   - Data quality:
     - Unit harmonization (SI)
     - Missing-value policies
     - Outlier flags and uncertainty tags

2. **Simulation Layer**
   - Core engines (Python services):
     - Fertilizer release kinetics simulator
     - Geopolymer reaction/strength simulator
     - Soil nutrient mass-balance simulator
     - Struvite precipitation equilibrium simulator
     - H2/NH3 process-energy simulator
   - Execution modes:
     - Fast screening (seconds)
     - Batch scenario sweeps (minutes)

3. **AI Layer**
   - Surrogate models to approximate simulation outputs quickly
   - Predictive models for optimization/recommendation
   - Multi-objective optimizer (yield, cost, CO2, water usage)
   - Active learning loop: choose next best physical experiment

4. **Interface Layer**
   - Streamlit web app (MVP) with module tabs
   - Experiment designer forms
   - Result dashboard with comparison plots
   - Export reports (PDF/CSV)

### B. Module connectivity and shared data

- Shared entities:
  - `Material`, `Feedstock`, `ProcessCondition`, `Experiment`, `SimulationRun`, `ModelPrediction`, `Recommendation`
- Cross-module links:
  - Soil AI module consumes release curves from fertilizer module.
  - Geopolymer module shares ash composition assays with wastewater/struvite impurity handling.
  - Green H2/NH3 module provides ammonia cost/availability constraints for fertilizer formulation economics.
  - Struvite recovery output feeds fertilizer blending scenarios.
- Pipeline:
  1. User defines scenario.
  2. Simulation generates physics outputs.
  3. AI model predicts outcomes/uncertainty.
  4. Optimizer proposes top experiments.
  5. User selects candidates for physical lab validation.

---

## 2) Scientific Simulation Models

> Simplified first-principles models suitable for MVP; later replace with high-fidelity solvers.

### Module 1: Slow-release cassava-starch fertilizer coating

- **Principles**: diffusion through coating, swelling/erosion, nutrient dissolution.
- **Model**:
  - Fickian release (spherical granule approximation):
    - `dM/dt = k_diff * (Cs - Cbulk)`
  - Empirical Korsmeyer–Peppas form:
    - `Mt/M∞ = k * t^n`
- **Required variables**:
  - Coating thickness (um)
  - Starch:plasticizer ratio
  - Crosslink density proxy
  - Temperature, soil moisture
  - Granule radius, nutrient solubility

### Module 2: Geopolymer cement (kaolin + agri ash)

- **Principles**: alkali activation, dissolution-precipitation, gel formation, porosity-strength relation.
- **Model**:
  - Degree of reaction:
    - `alpha(t)=1-exp(-k*t)` with `k=f(T, NaOH molarity, Si/Al ratio)`
  - Compressive strength proxy:
    - `fc = A * alpha^b * exp(-c*porosity)`
- **Variables**:
  - Kaolin/ash fraction
  - Ash oxide composition (SiO2, Al2O3, CaO)
  - Activator concentration, liquid/solid ratio
  - Curing temperature/time

### Module 3: AI soil nutrient and fertilizer recommendation

- **Principles**: nutrient mass balance, crop uptake response, pH-dependent availability.
- **Model**:
  - Nutrient balance for N, P, K:
    - `N_t+1 = N_t + inputs - uptake - losses`
  - Yield response (Mitscherlich-style):
    - `Y = A*(1-exp(-c*(N_avail)))`
- **Variables**:
  - Soil test values (N, P, K, pH, EC, organic carbon)
  - Crop type/stage
  - Rainfall and temperature
  - Fertilizer type and application schedule

### Module 4: Phosphorus recovery as struvite

- **Principles**: supersaturation, nucleation/precipitation, acid-base speciation.
- **Model**:
  - Precipitation criterion using ionic activity product (IAP):
    - Struvite forms when `IAP > Ksp`
  - Recovery approximation:
    - `P_recovered = eta * (P_in - P_eq)` where `eta=f(pH, Mg:P ratio, mixing)`
- **Variables**:
  - Influent NH4+, PO4^3-, Mg2+
  - pH, temperature
  - Residence time, mixing intensity
  - Competing ions (Ca2+, carbonate)

### Module 5: Green hydrogen + green ammonia (solar powered)

- **Principles**: PV generation, electrolysis efficiency, Haber-Bosch synthesis energy balance.
- **Model**:
  - H2 from electricity:
    - `m_H2 = E_elec * eta_el / LHV_H2`
  - NH3 production:
    - `N2 + 3H2 -> 2NH3`
    - `m_NH3 = m_H2 * (17/3*2)` (stoichiometric conversion factor)
  - Levelized cost proxy:
    - `LCOA = (CAPEX_ann + OPEX + power_cost)/NH3_output`
- **Variables**:
  - Solar irradiance profile
  - Electrolyzer efficiency and capacity
  - Storage capacity (battery/H2 tank)
  - Haber-Bosch conversion efficiency and pressure

---

## 3) Data Structure Design

### Core datasets

1. **Experimental dataset** (all modules)
   - experiment_id, module, input conditions, measured outputs, uncertainty, operator, date
2. **Material properties dataset**
   - starch rheology, ash composition, kaolin mineralogy, Ksp/constants
3. **Process operations dataset**
   - reactor settings, energy consumption, maintenance events
4. **Agronomic outcomes dataset**
   - plot-level yield, soil post-harvest status, climate data

### Example relational tables

| Table | Key columns |
|---|---|
| materials | material_id, category, composition_json, source_region |
| experiments | experiment_id, module, created_at, status |
| experiment_inputs | experiment_id, param_name, param_value, unit |
| experiment_outputs | experiment_id, metric_name, metric_value, unit |
| model_runs | run_id, model_name, version, metrics_json |
| recommendations | rec_id, farm_id/process_id, objective_weights, recommendation_json |

### Example JSON payload

```json
{
  "experiment_id": "fert_00128",
  "module": "slow_release_fertilizer",
  "inputs": {
    "coating_thickness_um": 85,
    "starch_glycerol_ratio": 3.2,
    "crosslink_index": 0.41,
    "soil_moisture_pct": 24,
    "temperature_c": 28
  },
  "outputs": {
    "release_7d_pct": 38.5,
    "release_30d_pct": 82.1
  },
  "metadata": {
    "site": "Kumasi_test_plot_A",
    "operator": "lab_tech_03",
    "quality_flag": "pass"
  }
}
```

---

## 4) AI Prediction System

### Recommended model families

1. **Slow-release coating**: Gradient Boosted Trees + Gaussian Process regressor for uncertainty.
2. **Geopolymer strength**: XGBoost/CatBoost regression; optional physics-informed neural net later.
3. **Soil recommendation**: multi-output regression + rule-based agronomic constraints.
4. **Struvite recovery**: Random Forest regression/classification (recovery % + scaling risk).
5. **H2/NH3 techno-economics**: LightGBM + scenario optimization (NSGA-II).

### Prediction workflow (shared)

1. Ingest user inputs and validate units/ranges.
2. Run quick physics simulation to generate baseline features.
3. Build feature vector = raw inputs + simulated descriptors.
4. Predict target metrics (e.g., release curve, strength, yield, recovery, cost).
5. Estimate uncertainty/confidence interval.
6. Apply feasibility rules (safety, local material availability, pH bounds, etc.).
7. Rank candidate recipes/processes by weighted objective score.
8. Return top-N recommendations with explanation fields.

---

## 5) MVP Development Plan (7–14 days)

### Day-by-day sprint

- **Day 1–2**: architecture scaffold, database schema, Streamlit UI skeleton.
- **Day 3–5**: implement simplified simulators for all five modules.
- **Day 6–8**: integrate baseline ML models (train on synthetic + literature-seeded data).
- **Day 9–10**: optimization engine + recommendation ranking.
- **Day 11–12**: dashboard visualizations + CSV/PDF export.
- **Day 13–14**: test with 2–3 real case studies, bug fixes, user feedback loop.

### Tech stack

- **Language**: Python 3.11+
- **Backend/data**: FastAPI (optional), PostgreSQL/SQLite for MVP
- **Simulation**: NumPy, SciPy
- **ML**: scikit-learn, XGBoost/LightGBM
- **Optimization**: pymoo or scipy.optimize
- **UI**: Streamlit + Plotly
- **MLOps-lite**: MLflow (optional) for model tracking

### Minimal validation features

- One calibrated scenario per module
- One recommendation endpoint per module
- Uncertainty indicator on predictions
- Exportable experiment report

---

## 6) Visualization Dashboard Design

### UI layout

- Top nav: 5 module tabs + "Cross-Module Optimizer"
- Left panel: input controls and constraints
- Main panel: plots + KPI cards + recommendations table
- Bottom: assumption notes and data quality flags

### Key visualizations

1. **Fertilizer module**: release % vs time curves; sensitivity tornado plot.
2. **Geopolymer module**: predicted strength vs curing time; contour map (NaOH vs ash fraction).
3. **Soil AI module**: radar chart of nutrient status; recommended dose by nutrient.
4. **Struvite module**: recovery % vs pH and Mg:P ratio heatmap.
5. **H2/NH3 module**: hourly energy flow Sankey; LCOA waterfall chart.
6. **Cross-module**: Pareto front (cost vs CO2 vs performance).

### Inputs/outputs

- **Inputs**: composition, operating conditions, climate/location, cost assumptions.
- **Outputs**: predicted metrics, confidence bands, feasibility flags, top experiment list.

---

## 7) Innovation Expansion Path

### Startup ecosystem roadmap

1. **Phase 1 (0–6 months)**: digital-lab SaaS for universities and pilot startups.
2. **Phase 2 (6–18 months)**: onboard industrial datasets from fertilizer plants, cement producers, wastewater utilities.
3. **Phase 3 (18+ months)**: marketplace for validated formulations/process recipes and carbon-credit linked analytics.

### African industrial opportunities

- Cassava belt regions: local biopolymer coating manufacturing.
- Rice husk / sugarcane ash regions: low-CO2 construction materials.
- Municipal wastewater plants: nutrient circularity and import substitution for phosphate fertilizers.
- Solar-rich zones: decentralized green ammonia microplants for local fertilizer supply.

### Global relevance

- Climate-smart agriculture decision systems
- Circular economy materials and nutrient recovery
- Low-carbon fuels and fertilizer supply chains

### Practical feasibility principles

- Start with low-cost assays and simplified models.
- Build trust with transparent uncertainty and explainability.
- Use local feedstocks, local climate data, local economics.
- Design for offline-first workflows where internet is intermittent.
