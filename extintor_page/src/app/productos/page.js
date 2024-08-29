'use client'
import React, { useState } from "react";
import Footer from "@/containers/Footer";
import { products, gabinetes, senales, tanques, luces } from "../../data/productData";
import ProductList from "@/components/ProductList";
import ProductDetails from "@/components/ProductDetails";
import CategoryProducts from "@/components/Categoty_products";

const ProductCategory = ({ title, items, selectedItem, onItemClick }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <ProductList
        items={items}
        onItemClick={onItemClick}
      />
      {selectedItem && items.includes(selectedItem) && (
        <div className="mt-4 lg:hidden">
          <ProductDetails selectedItem={selectedItem} />
        </div>
      )}
    </div>
  );
};

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
            <ProductCategory
              title="Extintores"
              items={products}
              selectedItem={selectedItem}
              onItemClick={handleItemClick}
            />
            <ProductCategory
              title="Gabinetes"
              items={gabinetes}
              selectedItem={selectedItem}
              onItemClick={handleItemClick}
            />
            <ProductCategory
              title="Señalización"
              items={senales}
              selectedItem={selectedItem}
              onItemClick={handleItemClick}
            />
            <ProductCategory
              title="Lavado de tanques"
              items={tanques}
              selectedItem={selectedItem}
              onItemClick={handleItemClick}
            />
            <ProductCategory
              title="Iluminación"
              items={luces}
              selectedItem={selectedItem}
              onItemClick={handleItemClick}
            />
          </div>
          <div className="w-full lg:w-3/4 hidden lg:block">
            <ProductDetails selectedItem={selectedItem} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}