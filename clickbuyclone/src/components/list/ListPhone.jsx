import React from "react";
import CardSamsung from "../card/CardSamsung";
import { Link } from "react-router-dom";

function ListPhone() {
  return (
    <div className="container">
      <div className="btn-name">
        <button>IPHONE</button>
        <button>SAMSUNG</button>
        <button>XIAOMI</button>
        <button>NOKIA</button>
        <button>OPPO</button>
        <button>REALME</button>
      </div>
      <div>
        <h3>Sắp xếp theo</h3>
        <button className="btn-filter">
          <i className="fa fa-sort-amount-desc"></i>Giá thấp - cao
        </button>
        <button className="btn-filter">
          <i className="fa fa-sort-amount-desc"></i>Giá cao - thấp
        </button>
      </div>
      <Link to="/">
        <div className="detail-product dflex">
          <CardSamsung />
        </div>
      </Link>
    </div>
  );
}

export default ListPhone;
