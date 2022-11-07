import React, { useState } from "react";
import client from "../utils/client";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    // rating: "",
  });

  function handleSubmit(event) {
    console.log("Submitted");
    event.preventDefault();
    // client
    //   .post("http://localhost:8080/inventory", product)
    //   .then((result) => console.log(result.data))
    //   .catch((err) => console.log(err));
    axios
      .post("https://xss-detection-ml-algo.herokuapp.com/", product)
      .then((result) => {
        if (result.data == "1") alert("This is a malicious script!!!");
        else alert("This is a safe text :)");
      })
      .catch((err) => console.log(err));

    // window.location.href = "/inventory";
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
