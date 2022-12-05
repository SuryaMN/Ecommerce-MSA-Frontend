import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ReactStars from "react-rating-stars-component";

function ProductPage(props) {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  let username = localStorage.getItem("username");

  function onChangeRating(newValue) {
    setRating(newValue);
    const obj = {
      [username]: [newValue, review],
    };

    setProduct((prevValue) => {
      return {
        ...prevValue,
        reviews: {...prevValue["reviews"], obj},
      };
    });
  }


  function onChangeReview(event) {
    setReview(event.target.value);
    const obj = {
      [username]: [rating, event.target.value],
    };

    setProduct((prevValue) => {
      return {
        ...prevValue,
        reviews: {...prevValue["reviews"], obj},
      };
    });
  }

  function onSubmit(event) {


    event.preventDefault();
    console.log(product);
    axios
      .post("http://127.0.0.1:8001/addReview", product)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => "Error : " + console.log(err));

  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(
        "https://api-gateway-1upk.onrender.com/inventory/" +
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
                      <img
                        src={"../../assets/img/" + product.image}
                        width={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{product.name}</h3>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: "Description : " + product.description,
                  }}
                ></p>
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
                  <ReactStars
                    value={rating}
                    count={5}
                    onChange={onChangeRating}
                    size={24}
                    isHalf={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <input type="text" onChange={onChangeReview}></input>
                <button onClick={onSubmit}>Submit</button>
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
