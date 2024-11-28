import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/app.css";
import axios from "axios";
import ProductCard from "./Components/ProductCard";
const App = () => {
  const [productdata, setProductdata] = useState([]);

  const getproduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setProductdata(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <div className="card">
        {/* <button onClick={getproduct}>Get Product Details</button> */}
        {productdata.map(function (product, idx) {
          return <ProductCard key={idx} productdetails={product} />;
        })}
      </div>
    </>
  );
};

export default App;
