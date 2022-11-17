import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";

function ProductPage(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(
        "https://api-gateway-capstone.herokuapp.com/inventory/" +
          props.match.params.id,
        config
      )
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src="../../assets/img/card.jpg" width={500} />
                    </div>
                  </div>

                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: "Description : " + product.description }}></p>
                  <h4 className="price">
                    Current price: <span>{product.price}</span>
                  </h4>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>

                  <div className="action">
                    <button className="btn btn-btn-primary" type="button">
                    Add to cart
                    </button>
                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-heart"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
{
  /* <div>
    <h1>Title : {product.name}</h1>
    <p>Price : {product.price}</p>
    <p dangerouslySetInnerHTML={{ __html: "Description : " + product.description }}
></p>
</div> */
}
