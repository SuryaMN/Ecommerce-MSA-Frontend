import React from "react";

function ProductCard(props) {
  return (
    <div className="card col-md-3">
      <img src="../../assets/img/card.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
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
