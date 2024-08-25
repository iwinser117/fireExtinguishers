"use client";
import { useState } from "react";
import Footer from "@/containers/Footer";
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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Nuestros Productos</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-medium font-serif mb-8 text-center">Categorías Destacadas</h2>
        <CategoryProducts />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-medium font-serif mb-8 text-center">Catálogo de Productos</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
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
            <ProductList
              title="Lavado de tanques"
              items={senales}
              onItemClick={handleItemClick}
            />
          </div>
          <div className="w-full lg:w-3/4">
            <ProductDetails selectedItem={selectedItem} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}