import pandas as pd
from snowflake_db import conn

query = """
SELECT *
FROM SUPPLY_CHAIN
"""

df = pd.read_sql(query, conn)

print(df.columns.tolist())   # Temporary: check columns


def get_dashboard_data():
    return {
        "total_orders": len(df),
        "total_sales": round(df["SALES"].sum(), 2),
        "late_deliveries": int(df["LATE_DELIVERY_RISK"].sum()),
        "avg_shipping_days": round(df["DAYS_FOR_SHIPPING_REAL"].mean(), 2),
        "avg_scheduled_days": round(df["DAYS_FOR_SHIPMENT_SCHEDULED"].mean(), 2),
    }
    print(df.columns.tolist())

print(df.head())

print(df[[
    "SALES",
    "LATE_DELIVERY_RISK",
    "DAYS_FOR_SHIPPING_REAL",
    "DAYS_FOR_SHIPMENT_SCHEDULED"
]].head())