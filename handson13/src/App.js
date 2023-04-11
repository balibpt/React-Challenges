import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ProductContext from "./ProductContext";
import ProductListing from "./ProductListing";

function App() {
  const [products, setProducts] = useState({
    products: [
      {
        id: 1,
        product_name: "ACME Anvils",
        cost: 9.99,
      },
      {
        id: 2,
        product_name: "ACME Hammers",
        cost: 19.99,
      },
      {
        id: 3,
        product_name: "ACME Screwdrivers",
        cost: 29.99,
      },
    ],
  });

  const context = {
    getProducts: () => {
      return products;
    },
  };

  return (
    <ProductContext.Provider value={context}>
      <React.Fragment>
        <ProductListing />
      </React.Fragment>
    </ProductContext.Provider>
  );
}

export default App;
