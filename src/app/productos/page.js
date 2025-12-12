'use client'
import React, { useState } from "react";
import Footer from "@/containers/Footer";
import { products, gabinetes, senales, tanques, luces } from "../../data/productData";
import ProductList from "@/components/ProductList";
import ProductDetails from "@/components/ProductDetails";
import CategoryProducts from "@/components/Categoty_products";

const ProductCategory = ({ title, items, selectedItem, onItemClick, groupName }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-slate-700 mb-3 tracking-wide uppercase">{title}</h3>
      <ProductList
        items={items}
        onItemClick={(item) => onItemClick({ ...item, category: title })}
        selectedItem={selectedItem}
        category={title}
        groupName={groupName}
      />
      {selectedItem && selectedItem.category === title && (
        <div className="mt-4 lg:hidden">
          <ProductDetails selectedItem={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default function Productos() {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectionGroupName = "catalog-product-selection";

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="w-11/12 mx-auto max-w-6xl py-14 flex flex-col gap-12">
        <header className="text-center space-y-4">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-600 font-semibold">Portafolio completo</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Equipos contra incendios y soporte integral</h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">Extintores, gabinetes, señalización, iluminación y mantenimiento para mantener tu operación segura y en norma.</p>
        </header>

        <section className="mb-4">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Categorías destacadas</h2>
            <span className="text-sm text-slate-500">Explora y selecciona lo que necesitas</span>
          </div>
          <CategoryProducts />
        </section>

        <section className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Catálogo de productos</h2>
              <p className="text-slate-600">Selecciona una categoría y explora los detalles.</p>
            </div>
            <div className="flex gap-3 text-sm text-slate-600">
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">Entrega y mantenimiento</span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100">Soporte técnico 24/7</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 xl:w-1/4">
              <div className="sticky top-6 space-y-6">
                <ProductCategory
                  title="Extintores"
                  items={products}
                  selectedItem={selectedItem}
                  onItemClick={handleItemClick}
                  groupName={selectionGroupName}
                />
                <ProductCategory
                  title="Gabinetes"
                  items={gabinetes}
                  selectedItem={selectedItem}
                  onItemClick={handleItemClick}
                  groupName={selectionGroupName}
                />
                <ProductCategory
                  title="Señalización"
                  items={senales}
                  selectedItem={selectedItem}
                  onItemClick={handleItemClick}
                  groupName={selectionGroupName}
                />
                <ProductCategory
                  title="Lavado de tanques"
                  items={tanques}
                  selectedItem={selectedItem}
                  onItemClick={handleItemClick}
                  groupName={selectionGroupName}
                />
                <ProductCategory
                  title="Iluminación"
                  items={luces}
                  selectedItem={selectedItem}
                  onItemClick={handleItemClick}
                  groupName={selectionGroupName}
                />
              </div>
            </div>

            <div className="w-full lg:w-2/3 xl:w-3/4">
              <ProductDetails selectedItem={selectedItem} />
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}