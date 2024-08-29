import CategoryProducts from "@/components/Categoty_products";

export default function ProductDetails({ selectedItem }) {
  if (!selectedItem) {
    return (
      <div className="h-full p-8 ">
        <h3 className="text-2xl font-semibold mb-4 text-center">Seleccione un producto para ver los detalles</h3>
        <CategoryProducts />
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full ">
      <div className="md:flex h-full items-center">
        <div className="md:w-1/3 flex items-center justify-center p-4">
          <img
            className="max-w-full max-h-64 object-contain"
            src={selectedItem.image}
            alt={selectedItem.name}
          />
        </div>
        <div className="md:w-2/3 p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {selectedItem.category}
          </div>
          <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">
            {selectedItem.name}
          </h2>
          <p className="mt-4 text-gray-600">{selectedItem.description}</p>
        </div>
      </div>
    </div>
  );
}