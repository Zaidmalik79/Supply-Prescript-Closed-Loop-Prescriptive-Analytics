import { useState } from "react";
import { predictDelay } from "../services/api";

function Prediction() {
  const [formData, setFormData] = useState({
    Shipping_Mode: "",
    Market: "",
    Order_Region: "",
    Category_Name: "",
    Customer_Segment: "",
    Order_Item_Quantity: 1,
    Sales: 0,
    Delay_Days: 0,
    Shipping_Efficiency: 1,
    Order_Month: 1,
    Order_Day: 1,
    Order_Weekday: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await predictDelay(formData);
      setResult(response);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
      setResult(null);
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "25px",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2>Supply Delay Prediction</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="Shipping_Mode"
          placeholder="Shipping Mode"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="Market"
          placeholder="Market"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="Order_Region"
          placeholder="Order Region"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="Category_Name"
          placeholder="Category Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="Customer_Segment"
          placeholder="Customer Segment"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="Order_Item_Quantity"
          placeholder="Order Item Quantity"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="Sales"
          placeholder="Sales"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="Delay_Days"
          placeholder="Delay Days"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          step="0.01"
          name="Shipping_Efficiency"
          placeholder="Shipping Efficiency"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="Order_Month"
          placeholder="Order Month"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="Order_Day"
          placeholder="Order Day"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="Order_Weekday"
          placeholder="Order Weekday"
          onChange={handleChange}
        />
        <br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Predict
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "10px",
          }}
        >
          <h2>Prediction Result</h2>

          <h3>
            Prediction:
            {" "}
            {result.Late_delivery_risk === 1
              ? "Late Delivery Risk"
              : "No Late Delivery Risk"}
          </h3>

          <h3>
            Recommendation:
            {" "}
            {result.Recommendation}
          </h3>

          <h3>
            Estimated Cost:
            {" "}
            ₹{result.Estimated_Cost}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Prediction;