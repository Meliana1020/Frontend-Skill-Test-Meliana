import Header from "../../Fragments/Header";
import Footer from "../../Fragments/Footer";
import TableProduct from "../../Fragments/TableProduct";
import InputWithButton from "../../Elements/InputWithButton/index";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductLayout = () => {
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

  const handleEdit = (id, updatedData) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

 
  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <>
      <Header />
      <div className="text-white text-lg m-4">Overview Dog Data</div>
      <div className="flex flex-row gap-[60%]">
        <InputWithButton
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <TableProduct
        products={products}
        searchQuery={searchQuery}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Footer />
    </>
  );
};

export default ProductLayout;
