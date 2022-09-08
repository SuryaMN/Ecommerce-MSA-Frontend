import React, { useState, useEffect } from "react";
import client from "../utils/client";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProductCard from "./ProductCard";
function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .get("http://localhost:8080/inventory")
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <div className="container-fluid">
          <div className="row justify-content-around">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inventory;
