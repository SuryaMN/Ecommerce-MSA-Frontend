import React, { useState, useEffect } from "react";
import axios from "axios";

function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/inventory")
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.id}</p>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
          </div>
        );
      })}
    </div>
  );
}

export default Inventory;
