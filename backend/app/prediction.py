import os
import joblib
import pandas as pd
from xgboost import XGBClassifier

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "ml", "xgboost_model.json")
ENCODER_PATH = os.path.join(BASE_DIR, "ml", "label_encoders.pkl")

# Load Model
model = XGBClassifier()
model.load_model(MODEL_PATH)

# Load Encoders
encoders = joblib.load(ENCODER_PATH)

print("Model Loaded Successfully!")


def predict(data):

    df = pd.DataFrame([data])

    categorical_cols = [
        "Shipping Mode",
        "Market",
        "Order Region",
        "Category Name",
        "Customer Segment",
        "Order_Weekday"
    ]

    # Encode categorical columns
    for col in categorical_cols:
        df[col] = encoders[col].transform(df[col])

    # Keep the same order used during training
    df = df[
        [
            "Shipping Mode",
            "Market",
            "Order Region",
            "Category Name",
            "Customer Segment",
            "Order Item Quantity",
            "Sales",
            "Delay_Days",
            "Shipping_Efficiency",
            "Order_Month",
            "Order_Day",
            "Order_Weekday"
        ]
    ]

    prediction = model.predict(df)

    return int(prediction[0])


if __name__ == "__main__":

    sample = {
        "Shipping Mode": "Standard Class",
        "Market": "Pacific Asia",
        "Order Region": "Southeast Asia",
        "Category Name": "Sporting Goods",
        "Customer Segment": "Consumer",
        "Order Item Quantity": 2,
        "Sales": 250.75,
        "Delay_Days": 1,
        "Shipping_Efficiency": 0.80,
        "Order_Month": 1,
        "Order_Day": 31,
        "Order_Weekday": "Wednesday"
    }

    result = predict(sample)

    if result == 1:
        print("Prediction: Late Delivery Risk")
    else:
        print("Prediction: No Late Delivery Risk")