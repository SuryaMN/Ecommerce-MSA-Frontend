import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


function addToCart(id){

  let body = {
    "user_id":localStorage.getItem("user_id"),
    "product_id":id
  }

  axios.post("http://127.0.0.1:8002/addCart",body)
  .then((result) => {
    console.log(result.data);
    alert(id + " added to cart");
  })
  .catch((err) => console.log(err))

}

function ProductCard(props) {
  return (
    <div className="card col-md-3">
      <img
        src={"../../assets/img/" + props.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <Link to={"/inventory/" + props.id}>
          <h5 className="card-title">{props.name}</h5>
        </Link>
        <p className="card-text">
          <b>Seller</b> : {props.seller}
        </p>
        <p className="card-text">
          <b>Price</b> : {props.price}
        </p>
        <div className="d-flex justify-content-end">
         <i className="bi bi-cart btn btn-primary" onClick={() => addToCart(props.id)}></i> 
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
