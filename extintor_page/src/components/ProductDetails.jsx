import CategoryProducts from "@/components/Categoty_products";
export default function ProductDetails({ selectedItem }) {
  if (!selectedItem) {
    return (
      <>
        <CategoryProducts />
      </>
    );
  }
  return (
    <div className="flex flex-col md:flex-row items-center 
    bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="max-w-full h-auto mx-auto"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-4">
        <h3 className="text-2xl font-mono text-yellow-500 font-extrabold mb-2 uppercase text-center">
          {selectedItem.name}
        </h3>
        <p className="text-white text-xl p-2">{selectedItem.description}</p>
      </div>
    </div>
  );
}
