import axios from 'axios';
import { useEffect, useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const handleIndex = () => {
    console.log('hello');
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    })
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products}/>
      {/* <button onClick={handleIndex}>get the products</button> */}
    </main>
  );
}
