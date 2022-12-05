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
        reviews: { ...prevValue["reviews"], obj },
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
        reviews: { ...prevValue["reviews"], obj },
      };
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(product);
    axios
      .post("https://inventory-service.onrender.com/addReview", product)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => "Error : " + console.log(err));
  }

  function addToCart(id){

  
    let body = {
      "user_id":localStorage.getItem("user_id"),
      "product_id":id
    }
  
    axios.post("https://cart-service.onrender.com/addCart",body)
    .then((result) => {
      console.log(result.data);
      alert(id + " added to cart");
    })
    .catch((err) => console.log(err))
  
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

                <div className="action">
                  <div className="d-flex justify-content-end">
                    <i
                      className="bi bi-cart btn btn-primary"
                      onClick={() => addToCart(product._id)}
                    ></i>
                  </div>

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

                  {/* {
                    Object.keys(product['reviews']['obj']).map((keyName, keyIndex) => {
                      return (<p>{product['reviews']['obj']}</p>)
                    })
                  } */}


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
