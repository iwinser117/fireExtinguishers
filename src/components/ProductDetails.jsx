import Image from "next/image";
import CategoryProducts from "@/components/Categoty_products";
import { Info } from 'lucide-react';

export default function ProductDetails({ selectedItem }) {
  if (!selectedItem) {
    return (
      <div className="h-full p-8 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center">
        <Info className="w-16 h-16 text-blue-500 mb-4" />
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Seleccione un producto para ver los detalles
        </h3>
        <p className="text-center text-gray-600 max-w-md">
          Explore nuestra amplia gama de productos de seguridad contra incendios.
          Haga clic en cualquier producto de la lista para obtener más información.
        </p>
        <ul className="mt-6 text-sm text-gray-700">
          <li className="mb-2">✓ Información detallada del producto</li>
          <li className="mb-2">✓ Especificaciones técnicas</li>
          <li className="mb-2">✓ Imágenes de alta calidad</li>
          <li>✓ Recomendaciones de uso</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
      <div className="md:flex h-full items-center">
        <div className="md:w-1/3 flex items-center justify-center p-4">
          <div className="relative w-full aspect-square max-w-[250px]">
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              layout="fill"
              objectFit="contain"
              priority
              className="rounded-lg"
            />
          </div>
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