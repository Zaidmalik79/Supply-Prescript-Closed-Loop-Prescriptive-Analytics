import { useState } from "react";
import { predictDelivery } from "../services/api";
import "./Prediction.css";

function Prediction() {
  const [formData, setFormData] = useState({
    Shipping_Mode: "Standard Class",
    Market: "Pacific Asia",
    Order_Region: "South Asia",
    Category_Name: "Electronics",
    Customer_Segment: "Consumer",
    Order_Item_Quantity: 1,
    Sales: 100,
    Delay_Days: 2,
    Shipping_Efficiency: 0.8,
    Order_Month: 5,
    Order_Day: 15,
    Order_Weekday: "Wednesday",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePredict = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = {
        ...formData,

        Order_Item_Quantity: Number(formData.Order_Item_Quantity),
        Sales: Number(formData.Sales),
        Delay_Days: Number(formData.Delay_Days),
        Shipping_Efficiency: Number(formData.Shipping_Efficiency),
        Order_Month: Number(formData.Order_Month),
        Order_Day: Number(formData.Order_Day),
      };

      console.log("Sending prediction request:", data);

      const response = await predictDelivery(data);

      console.log("Backend API response:", response);

      /*
        Backend response:

        {
          "Late_delivery_risk": 1,
          "Recommendation": "Delay Product Launch",
          "Estimated_Cost": 5000
        }
      */

      setResult(response);
    } catch (err) {
      console.error("Prediction error:", err);

      if (err.response) {
        console.error("Backend error:", err.response.data);

        setError(
          err.response.data?.detail ||
            "Backend returned an error."
        );
      } else if (err.request) {
        setError(
          "Backend is not reachable. Make sure FastAPI is running on port 8000."
        );
      } else {
        setError("Prediction failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Convert 0/1 prediction into readable text
  const getRiskText = () => {
    if (!result) return "N/A";

    if (result.Late_delivery_risk === 1) {
      return "HIGH RISK";
    }

    if (result.Late_delivery_risk === 0) {
      return "LOW RISK";
    }

    return String(result.Late_delivery_risk);
  };

  const getRiskClass = () => {
    if (!result) return "";

    return result.Late_delivery_risk === 1
      ? "high-risk"
      : "low-risk";
  };

  return (
    <div className="prediction-page">

      {/* HEADER */}
      <div className="prediction-header">
        <h1>Delivery Risk Prediction</h1>

        <p>
          Enter shipment details to predict delivery risk and
          receive an automated business recommendation.
        </p>
      </div>

      <div className="prediction-container">

        {/* ================= FORM ================= */}
        <form
          className="prediction-form"
          onSubmit={handlePredict}
        >

          {/* Shipping Mode */}
          <div className="form-group">
            <label>Shipping Mode</label>

            <select
              name="Shipping_Mode"
              value={formData.Shipping_Mode}
              onChange={handleChange}
            >
              <option>First Class</option>
              <option>Second Class</option>
              <option>Same Day</option>
              <option>Standard Class</option>
            </select>
          </div>

          {/* Market */}
          <div className="form-group">
            <label>Market</label>

            <select
              name="Market"
              value={formData.Market}
              onChange={handleChange}
            >
              <option>Pacific Asia</option>
              <option>South Asia</option>
              <option>Southeast Asia</option>
              <option>Europe</option>
              <option>Africa</option>
            </select>
          </div>

          {/* Order Region */}
          <div className="form-group">
            <label>Order Region</label>

            <input
              type="text"
              name="Order_Region"
              value={formData.Order_Region}
              onChange={handleChange}
              placeholder="South Asia"
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <input
              type="text"
              name="Category_Name"
              value={formData.Category_Name}
              onChange={handleChange}
              placeholder="Electronics"
            />
          </div>

          {/* Customer Segment */}
          <div className="form-group">
            <label>Customer Segment</label>

            <select
              name="Customer_Segment"
              value={formData.Customer_Segment}
              onChange={handleChange}
            >
              <option>Consumer</option>
              <option>Corporate</option>
              <option>Home Office</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="form-group">
            <label>Quantity</label>

            <input
              type="number"
              name="Order_Item_Quantity"
              value={formData.Order_Item_Quantity}
              onChange={handleChange}
              min="1"
            />
          </div>

          {/* Sales */}
          <div className="form-group">
            <label>Sales ($)</label>

            <input
              type="number"
              name="Sales"
              value={formData.Sales}
              onChange={handleChange}
              min="0"
              step="0.01"
            />
          </div>

          {/* Delay */}
          <div className="form-group">
            <label>Delay Days</label>

            <input
              type="number"
              name="Delay_Days"
              value={formData.Delay_Days}
              onChange={handleChange}
              min="0"
            />
          </div>

          {/* Shipping Efficiency */}
          <div className="form-group">
            <label>Shipping Efficiency</label>

            <input
              type="number"
              step="0.01"
              name="Shipping_Efficiency"
              value={formData.Shipping_Efficiency}
              onChange={handleChange}
              min="0"
              max="1"
            />
          </div>

          {/* Month */}
          <div className="form-group">
            <label>Order Month</label>

            <input
              type="number"
              name="Order_Month"
              value={formData.Order_Month}
              onChange={handleChange}
              min="1"
              max="12"
            />
          </div>

          {/* Day */}
          <div className="form-group">
            <label>Order Day</label>

            <input
              type="number"
              name="Order_Day"
              value={formData.Order_Day}
              onChange={handleChange}
              min="1"
              max="31"
            />
          </div>

          {/* Weekday */}
          <div className="form-group">
            <label>Order Weekday</label>

            <select
              name="Order_Weekday"
              value={formData.Order_Weekday}
              onChange={handleChange}
            >
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="predict-button"
            disabled={loading}
          >
            {loading
              ? "🔄 Predicting..."
              : "🔮 Predict Delivery Risk"}
          </button>

        </form>

        {/* ================= RESULT ================= */}
        <div className="prediction-result">

          {!result && !error && (
            <div className="result-placeholder">

              <div className="robot">🤖</div>

              <h2>Prediction Result</h2>

              <p>
                Enter shipment information and click
                <b> Predict Delivery Risk </b>
                to generate a prediction.
              </p>

            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="error-box">

              <h2>⚠️ Prediction Error</h2>

              <p>{error}</p>

            </div>
          )}

          {/* RESULT */}
          {result && (
            <div className="result-box">

              <h2>Prediction Result</h2>

              {/* DELIVERY RISK */}
              <div className="result-card">

                <span>Delivery Risk</span>

                <strong className={getRiskClass()}>
                  {getRiskText()}
                </strong>

                <small>
                  Model Prediction:{" "}
                  {result.Late_delivery_risk}
                </small>

              </div>

              {/* RECOMMENDATION */}
              <div className="result-card">

                <span>Recommendation</span>

                <strong>
                  {result.Recommendation || "N/A"}
                </strong>

              </div>

              {/* COST */}
              <div className="result-card">

                <span>Estimated Cost</span>

                <strong>
                  {result.Estimated_Cost !== undefined
                    ? `$${Number(
                        result.Estimated_Cost
                      ).toFixed(2)}`
                    : "N/A"}
                </strong>

              </div>

              {/* API RESPONSE */}
              <details className="api-response">

                <summary>
                  View API Response
                </summary>

                <pre>
                  {JSON.stringify(
                    result,
                    null,
                    2
                  )}
                </pre>

              </details>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Prediction;