import React, { useState, useEffect } from "react";
import client from "../utils/client";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProductCard from "./ProductCard";
import axios from "axios";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const config = {
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    };
    axios
      // .get("https://inventory-service.onrender.com/getProducts",config)
      .get("https://cart-service.onrender.com/getCart/"+localStorage.getItem("user_id"),config)
      .then((result) => {
        console.log(result.data);
        setProducts(result.data); 
      })
      .catch((err) => {
        alert(err.response.data.message)

      });
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
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  seller={product.seller}
                  // description={product.description}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
