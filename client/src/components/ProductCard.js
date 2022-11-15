import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="card col-md-3">
      <img src="../../assets/img/card.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={"/"+props.id}><h5 className="card-title">{props.name}</h5></Link> 
        <p className="card-text">
          <b>Price</b> : {props.price}
        </p>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
      </div>
    </div>
  );
}

export default ProductCard;
