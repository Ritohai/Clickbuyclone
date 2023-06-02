import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CardSamsung() {
  const [product, setProduct] = useState([]);
  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8000/phone");
    setProduct(result.data);
    // console.log(result.data);
  };
  const iphoneProduct = product.filter((item) => item.category === "iphone");

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      {iphoneProduct.map((e, i) => (
        <div className="detail">
          <Link to={`/inforphone/${e.id}`} key={i}>
            <img src={e.image} />
            <p className="name-product">{e.namephone}</p>
            <p className="price" style={{color:"black"}}>{e.price}đ</p>
            <p>{e.KM}</p>
            <p>{e.rate}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default CardSamsung;
