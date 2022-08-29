import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
  });

  function handleSubmit(event) {
    console.log("Submitted");
    event.preventDefault();
    axios
      .post("http://localhost:8080/inventory", product)
      .then((result) => console.log(result.data))
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
    <div>
      <h2>Add product</h2>
      <form onSubmit={handleSubmit}>
        <input
          display="block"
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
          value={product.name}
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description"
          value={product.description}
        />
        <input
          type="number"
          onChange={handleChange}
          name="rating"
          placeholder="Rating"
          value={product.rating}
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Price"
          value={product.price}
        />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}

export default AddProduct;
