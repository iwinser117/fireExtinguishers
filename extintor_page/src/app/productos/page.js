"use client";
import Footer from "@/containers/Footer";
import { useState } from "react";
import { products, gabinetes, senales } from "../../data/productData";
import ProductList from "@/components/ProductList";
import ProductDetails from "@/components/ProductDetails";
import CategoryProducts from "@/components/Categoty_products";
export default function Productos() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <main className="container">
      <article className="">
        {/* <CategoryProducts /> */}
      </article>

      <section className="my-8 w-10/12 mx-auto">
        <h2 className="text-3xl font-medium font-serif my-8 text-center">Productos</h2>
        <div className="flex flex-row flex-wrap items-center">
          <div className="w-full sm:w-1/3 lg:w-1/4 pr-4">
            <ProductList
              title="Extintores"
              items={products}
              onItemClick={handleItemClick}
            />
            <ProductList
              title="Gabinetes"
              items={gabinetes}
              onItemClick={handleItemClick}
            />
            <ProductList
              title="Señalización"
              items={senales}
              onItemClick={handleItemClick}
            />
          </div>
          <div className="w-full sm:w-2/3 lg:w-3/4">
            <ProductDetails selectedItem={selectedItem} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
