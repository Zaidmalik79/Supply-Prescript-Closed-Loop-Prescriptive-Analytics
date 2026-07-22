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

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await predictDelay(formData);

      setResult(
        response.Late_delivery_risk === 1
          ? "Late Delivery Risk"
          : "No Late Delivery Risk"
      );
    } catch (error) {
      console.error(error);
      setResult("Prediction Failed");
    }
  };

  return (
    <div>
      <h2>Supply Prediction</h2>

      <form onSubmit={handleSubmit}>
        <input name="Shipping_Mode" placeholder="Shipping Mode" onChange={handleChange} />
        <input name="Market" placeholder="Market" onChange={handleChange} />
        <input name="Order_Region" placeholder="Order Region" onChange={handleChange} />
        <input name="Category_Name" placeholder="Category Name" onChange={handleChange} />
        <input name="Customer_Segment" placeholder="Customer Segment" onChange={handleChange} />
        <input type="number" name="Order_Item_Quantity" placeholder="Quantity" onChange={handleChange} />
        <input type="number" name="Sales" placeholder="Sales" onChange={handleChange} />
        <input type="number" name="Delay_Days" placeholder="Delay Days" onChange={handleChange} />
        <input type="number" step="0.01" name="Shipping_Efficiency" placeholder="Shipping Efficiency" onChange={handleChange} />
        <input type="number" name="Order_Month" placeholder="Month" onChange={handleChange} />
        <input type="number" name="Order_Day" placeholder="Day" onChange={handleChange} />
        <input name="Order_Weekday" placeholder="Weekday" onChange={handleChange} />

        <button type="submit">Predict</button>
      </form>

      <h3>{result}</h3>
    </div>
  );
}

export default Prediction;