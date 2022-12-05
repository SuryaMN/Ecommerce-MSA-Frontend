import React, { useState, useEffect } from "react";
import client from "../utils/client";
import axios from "axios";

function AddProduct() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    seller: localStorage.getItem("username"),
    rating: 0,
    reviews:{}
  });

  function handleSubmit(event) {
    console.log("Submitted");
    event.preventDefault();
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    // let formData = new FormData();

    // formData.append("image",selectedImage);
    // formData.append("name",product.name);
    // formData.append("description",product.description);
    // formData.append("price",product.price);
    // formData.append("rating",product.rating);
    // formData.append("seller",product.seller);

    // axios
    //   .post("https://xss-detection-ml-algo.onrender.com/", product)
    //   .then((result) => {
    //     if (result.data == "1") alert("This is a malicious script!!!");
    //     else {
    axios
      .post("https://api-gateway-1upk.onrender.com/addProduct", product, config)
      .then((result) => {
        console.log(result.data);
        window.location.href = "/inventory";
      })
      .catch((err) => console.log(err));
    //       }
    //     })
    //     .catch((err) => console.log(err));
  }

  function handleChange(event) {
    let { name, value } = event.target;

    setProduct((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3" style={{ width: "100%" }}>
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label
                          htmlFor="inputText"
                          className="col-sm-2 col-form-label"
                        >
                          Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="name"
                            placeholder="Name"
                            value={product.name}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Description
                        </label>
                        <div className="col-sm-10">
                          <textarea
                            className="form-control"
                            onChange={handleChange}
                            name="description"
                            placeholder="Description"
                            value={product.description}
                          />
                        </div>
                      </div>

                      {/* <div className="row mb-3">
                        <label
                          htmlFor="inputNumber"
                          className="col-sm-2 col-form-label"
                        >
                          Rating
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="number"
                            className="form-control"
                            onChange={handleChange}
                            name="rating"
                            placeholder="Rating"
                            value={product.rating}
                          />
                        </div>
                      </div> */}

                      <div className="row mb-3">
                        <label
                          htmlFor="inputNumber"
                          className="col-sm-2 col-form-label"
                        >
                          Price
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="number"
                            className="form-control"
                            onChange={handleChange}
                            name="price"
                            placeholder="Price"
                            value={product.price}
                          />
                        </div>
                      </div>

                      {selectedImage && (
                        <div>
                          <img
                            alt="not fount"
                            width={"250px"}
                            src={URL.createObjectURL(selectedImage)}
                          />
                          <br />
                          <button onClick={() => setSelectedImage(null)}>
                            Remove
                          </button>
                        </div>
                      )}

                      <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setSelectedImage(event.target.files[0]);
                          setProduct((prevValue) => {
                            return {
                              ...prevValue,
                              image: event.target.files[0].name,
                            };
                          });
                        }}
                      />

                      <div className="row mb-3">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">
                            Submit Form
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct;
