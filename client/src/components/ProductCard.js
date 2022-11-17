import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="card col-md-3">
      <img src="../../assets/img/card.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={"/inventory/"+props.id}><h5 className="card-title">{props.name}</h5></Link> 
        <p className="card-text">
          <b>Price</b> : {props.price}
        </p>

      </div>
    </div>
  );
}

export default ProductCard;
