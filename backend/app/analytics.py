import os
import pandas as pd

# Project root
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

# Dataset path
DATA_PATH = os.path.join(ROOT_DIR, "dataset", "cleaned_supply_chain..csv")

# Load dataset
df = pd.read_csv(DATA_PATH)


def get_dashboard_data():

    return {
        "total_orders": len(df),
        "total_sales": round(df["Sales"].sum(), 2),
        "late_deliveries": int(df["Late_delivery_risk"].sum()),
        "average_shipping_efficiency": round(df["Shipping_Efficiency"].mean(), 2),
    }