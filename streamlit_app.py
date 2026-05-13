import math
from dataclasses import dataclass

import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

st.set_page_config(page_title="Digital Chemistry & Agriculture Lab", layout="wide")

st.title("🌍 Digital Chemistry & Agriculture Laboratory")
st.caption(
    "Rapid simulation and AI-style decision support for African innovation projects in fertilizer, materials, wastewater, and green fuels."
)


@dataclass
class KPI:
    name: str
    value: float
    unit: str


def objective_score(cost, co2, performance, w_cost, w_co2, w_perf):
    perf_term = 1 / max(performance, 1e-6)
    return w_cost * cost + w_co2 * co2 + w_perf * perf_term


with st.sidebar:
    st.header("Global Settings")
    region = st.selectbox(
        "Target region",
        ["West Africa", "East Africa", "Southern Africa", "North Africa", "Central Africa"],
    )
    objective = st.multiselect(
        "Optimization goals",
        ["Minimize cost", "Minimize CO2", "Maximize performance"],
        default=["Minimize cost", "Maximize performance"],
    )
    st.markdown("---")
    st.markdown("**Assumption:** Simplified first-principles + surrogate logic for MVP use.")

module_tabs = st.tabs(
    [
        "Slow-Release Fertilizer",
        "Geopolymer Cement",
        "Soil Nutrient AI",
        "Struvite Recovery",
        "Green H2 + NH3",
        "Cross-Module Optimizer",
    ]
)

# 1) Slow-release fertilizer
with module_tabs[0]:
    st.subheader("Cassava-Starch Slow-Release Fertilizer Simulator")
    c1, c2, c3 = st.columns(3)
    with c1:
        thickness_um = st.slider("Coating thickness (μm)", 20, 200, 80)
        starch_ratio = st.slider("Starch:plasticizer ratio", 1.0, 6.0, 3.0, 0.1)
    with c2:
        crosslink = st.slider("Crosslink index", 0.1, 1.0, 0.4, 0.01)
        temp_c = st.slider("Temperature (°C)", 15, 45, 28)
    with c3:
        soil_moisture = st.slider("Soil moisture (%)", 5, 50, 25)
        granule_radius_mm = st.slider("Granule radius (mm)", 1.0, 4.0, 2.0, 0.1)

    t_days = np.arange(1, 61)
    k = (0.045 * (soil_moisture / 25) * math.exp((temp_c - 28) / 30)) / (1 + thickness_um / 120)
    n = min(0.95, 0.45 + 0.25 * crosslink + 0.02 * starch_ratio)
    release = np.clip(100 * (1 - np.exp(-k * (t_days**n))), 0, 100)

    release_df = pd.DataFrame({"Day": t_days, "Release (%)": release})
    fig = px.line(release_df, x="Day", y="Release (%)", title="Predicted Nutrient Release Curve")
    st.plotly_chart(fig, use_container_width=True)
    st.metric("Release at day 30", f"{release_df.loc[29, 'Release (%)']:.1f}%")

# 2) Geopolymer
with module_tabs[1]:
    st.subheader("Kaolin + Agricultural Ash Geopolymer Simulator")
    c1, c2, c3 = st.columns(3)
    with c1:
        ash_frac = st.slider("Ash fraction in binder (%)", 10, 80, 40)
        naoh_m = st.slider("NaOH molarity (M)", 4.0, 16.0, 10.0, 0.5)
    with c2:
        si_al = st.slider("Si/Al ratio", 1.0, 4.0, 2.0, 0.1)
        porosity = st.slider("Porosity fraction", 0.05, 0.45, 0.20, 0.01)
    with c3:
        curing_temp = st.slider("Curing temperature (°C)", 20, 90, 45)
        curing_days = st.slider("Curing duration (days)", 1, 28, 14)

    k = 0.06 * (naoh_m / 10) * (si_al / 2) * math.exp((curing_temp - 45) / 60)
    alpha = 1 - math.exp(-k * curing_days)
    fc = 65 * (alpha**1.4) * math.exp(-2.2 * porosity) * (1 + 0.002 * (ash_frac - 40))
    st.metric("Predicted compressive strength", f"{fc:.1f} MPa")

    days = np.arange(1, curing_days + 1)
    strength_curve = 65 * ((1 - np.exp(-k * days)) ** 1.4) * np.exp(-2.2 * porosity)
    st.plotly_chart(
        px.line(pd.DataFrame({"Day": days, "Strength (MPa)": strength_curve}), x="Day", y="Strength (MPa)"),
        use_container_width=True,
    )

# 3) Soil AI
with module_tabs[2]:
    st.subheader("AI-Powered Soil Nutrient Recommendation")
    c1, c2, c3 = st.columns(3)
    with c1:
        soil_n = st.number_input("Soil N (kg/ha)", 0.0, 300.0, 55.0)
        soil_p = st.number_input("Soil P (kg/ha)", 0.0, 200.0, 18.0)
    with c2:
        soil_k = st.number_input("Soil K (kg/ha)", 0.0, 400.0, 90.0)
        soil_ph = st.slider("Soil pH", 4.0, 9.0, 6.2, 0.1)
    with c3:
        rainfall = st.number_input("Season rainfall (mm)", 100.0, 2000.0, 700.0)
        crop = st.selectbox("Crop", ["Maize", "Rice", "Cassava", "Wheat"])

    targets = {
        "Maize": {"N": 140, "P": 35, "K": 110},
        "Rice": {"N": 120, "P": 30, "K": 90},
        "Cassava": {"N": 90, "P": 25, "K": 140},
        "Wheat": {"N": 130, "P": 32, "K": 95},
    }
    t = targets[crop]
    ph_factor = max(0.6, 1 - abs(soil_ph - 6.5) * 0.08)
    rain_factor = min(1.2, max(0.85, rainfall / 700))

    rec_n = max(0, (t["N"] - soil_n) * 1.15 / ph_factor)
    rec_p = max(0, (t["P"] - soil_p) * 1.10 / ph_factor)
    rec_k = max(0, (t["K"] - soil_k) * rain_factor)

    rec_df = pd.DataFrame(
        {"Nutrient": ["N", "P", "K"], "Recommended dose (kg/ha)": [rec_n, rec_p, rec_k]}
    )
    st.plotly_chart(px.bar(rec_df, x="Nutrient", y="Recommended dose (kg/ha)", color="Nutrient"), use_container_width=True)
    yield_index = min(1.2, 0.45 + 0.003 * min(soil_n + rec_n, t["N"]) + 0.0015 * min(soil_k + rec_k, t["K"]))
    st.metric("Relative yield index", f"{yield_index:.2f}")

# 4) Struvite
with module_tabs[3]:
    st.subheader("Phosphorus Recovery as Struvite")
    c1, c2, c3 = st.columns(3)
    with c1:
        nh4 = st.number_input("NH4+ concentration (mg/L)", 10.0, 1000.0, 180.0)
        po4 = st.number_input("PO4-P concentration (mg/L)", 5.0, 500.0, 45.0)
    with c2:
        mg = st.number_input("Mg2+ concentration (mg/L)", 5.0, 500.0, 60.0)
        ph = st.slider("Reactor pH", 6.0, 10.0, 8.5, 0.1)
    with c3:
        temp = st.slider("Temperature (°C)", 10, 40, 27)
        rt = st.slider("Residence time (min)", 5, 180, 45)

    mg_p_ratio = (mg / 24.3) / max((po4 / 31), 1e-6)
    supersat = (ph - 7.0) * 0.8 + (mg_p_ratio - 1.0) * 0.7 + (rt / 60) * 0.3
    eta = np.clip(0.25 + 0.18 * supersat - 0.02 * abs(temp - 28), 0.0, 0.95)
    p_recovered = po4 * eta

    st.metric("Estimated phosphorus recovery", f"{eta*100:.1f}%")
    st.metric("Recovered P mass", f"{p_recovered:.1f} mg/L")

# 5) H2/NH3
with module_tabs[4]:
    st.subheader("Solar-Powered Green H2 + NH3 Process Model")
    c1, c2, c3 = st.columns(3)
    with c1:
        solar_kwh_day = st.number_input("Daily solar energy available (kWh/day)", 50.0, 50000.0, 5000.0)
        eta_el = st.slider("Electrolyzer efficiency", 0.45, 0.80, 0.65, 0.01)
    with c2:
        electrolyzer_kw = st.number_input("Electrolyzer capacity (kW)", 10.0, 10000.0, 700.0)
        hb_eff = st.slider("Haber-Bosch conversion efficiency", 0.5, 0.95, 0.82, 0.01)
    with c3:
        capex_day = st.number_input("Dailyized CAPEX+OPEX (USD/day)", 10.0, 100000.0, 1400.0)
        power_cost = st.number_input("Electricity cost (USD/kWh)", 0.0, 0.5, 0.05, 0.01)

    effective_elec = min(solar_kwh_day, electrolyzer_kw * 24)
    lhv_h2_kwh_per_kg = 33.33
    h2_kg_day = effective_elec * eta_el / lhv_h2_kwh_per_kg
    nh3_kg_day = h2_kg_day * (34 / 6) * hb_eff
    lcoa = (capex_day + effective_elec * power_cost) / max(nh3_kg_day, 1e-6)

    kpi_cols = st.columns(3)
    kpi_cols[0].metric("H2 production", f"{h2_kg_day:.1f} kg/day")
    kpi_cols[1].metric("NH3 production", f"{nh3_kg_day:.1f} kg/day")
    kpi_cols[2].metric("Estimated LCOA", f"${lcoa:.2f}/kg-NH3")

# 6) cross-module
with module_tabs[5]:
    st.subheader("Cross-Module Scenario Optimizer")
    st.write("Compare candidate projects with multi-objective ranking.")

    sample = pd.DataFrame(
        {
            "Scenario": [
                "Cassava-Coated NPK + Struvite Blend",
                "Geopolymer Blocks + Wastewater Recovery",
                "Solar NH3 + Soil AI Advisory",
                "Integrated Circular Hub",
            ],
            "Cost_USD_t": [280, 240, 420, 310],
            "CO2_kg_t": [180, 120, 90, 105],
            "Performance_Index": [0.78, 0.70, 0.88, 0.93],
        }
    )

    w_cost = 0.5 if "Minimize cost" in objective else 0.2
    w_co2 = 0.3 if "Minimize CO2" in objective else 0.2
    w_perf = 0.5 if "Maximize performance" in objective else 0.2

    sample["Score"] = sample.apply(
        lambda r: objective_score(r["Cost_USD_t"], r["CO2_kg_t"], r["Performance_Index"], w_cost, w_co2, w_perf),
        axis=1,
    )
    ranked = sample.sort_values("Score")

    st.dataframe(ranked, use_container_width=True)
    st.plotly_chart(
        px.scatter(
            sample,
            x="Cost_USD_t",
            y="CO2_kg_t",
            size="Performance_Index",
            color="Scenario",
            title=f"Pareto-style view ({region})",
        ),
        use_container_width=True,
    )

st.markdown("---")
st.caption("MVP note: outputs are decision-support estimates and should be calibrated with local experimental data.")
