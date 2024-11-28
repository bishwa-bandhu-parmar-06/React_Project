import React from "react";
import "../styles/productcard.css";

const ProductCard = ({ productdetails }) => {
  return (
    <>
      <div className="card">
        <div className="box">
          <div className="img">
            <img src={productdetails.image} alt="Product Image" />
          </div>
          <div className="pd">
            <span className="a">{productdetails.id}</span>
            <span className="b">{productdetails.title}</span>
            <span className="c">₹{productdetails.price}</span>
            <span className="d">{productdetails.description}</span>
            <span className="e">{productdetails.category}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
