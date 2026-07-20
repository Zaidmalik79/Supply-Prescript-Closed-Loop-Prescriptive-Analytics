from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from prediction import predict

app = FastAPI(title="SupplyPrescript API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PredictionRequest(BaseModel):
    Shipping_Mode: str
    Market: str
    Order_Region: str
    Category_Name: str
    Customer_Segment: str
    Order_Item_Quantity: int
    Sales: float
    Delay_Days: int
    Shipping_Efficiency: float
    Order_Month: int
    Order_Day: int
    Order_Weekday: str


@app.get("/")
def home():
    return {"message": "SupplyPrescript API Running"}


@app.post("/predict")
def predict_delay(request: PredictionRequest):

    data = {
        "Shipping Mode": request.Shipping_Mode,
        "Market": request.Market,
        "Order Region": request.Order_Region,
        "Category Name": request.Category_Name,
        "Customer Segment": request.Customer_Segment,
        "Order Item Quantity": request.Order_Item_Quantity,
        "Sales": request.Sales,
        "Delay_Days": request.Delay_Days,
        "Shipping_Efficiency": request.Shipping_Efficiency,
        "Order_Month": request.Order_Month,
        "Order_Day": request.Order_Day,
        "Order_Weekday": request.Order_Weekday
    }

    result = predict(data)

    return {
        "Late_delivery_risk": int(result)
    }