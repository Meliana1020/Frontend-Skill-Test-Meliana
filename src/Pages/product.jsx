import Header from "../Components/Fragments/Header"
import Footer from "../Components/Fragments/Footer";
import TableProduct from "../Components/Fragments/TableProduct";
import InputWithButton from "../Components/Elements/InputWithButton/index";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
    const [products, setProducts] = useState([]); 
    const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

    return(
        <>
        <Header />
        <div className="text-white text-lg m-4">Overview Dog Data</div>
        <InputWithButton searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TableProduct products={products} searchQuery={searchQuery} />
        <Footer />
        </>
    )
}

export default ProductPage;