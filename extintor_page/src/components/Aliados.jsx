import Link from "next/link";
import {
  FaVideo,
  FaBolt,
  FaSprayCan,
  FaShieldAlt,
  FaBell,
} from "react-icons/fa";

const allies = [
  { name: "Cámaras", href: "/aliados/camaras", icon: FaVideo },
  { name: "Cercas eléctricas", href: "/aliados/cercas", icon: FaBolt },
  { name: "Fumigación", href: "/aliados/fumigacion", icon: FaSprayCan },
  { name: "Seguridad", href: "/aliados/seguridad", icon: FaShieldAlt },
  { name: "Alarmas", href: "/aliados/alarmas", icon: FaBell },
];

export default function Aliados() {
  return (
    <div className="w-full sm:full md:w-1/2 m-2 bg-gray-100 rounded-lg p-6 shadow-md">
      <h3 className="text-center text-2xl font-bold mb-4 text-blue-600">
        Nuestros aliados
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Si requieres más productos o servicios, puedes contactar a nuestros aliados:
      </p>
      <ul className="space-y-4">
        {allies.map((ally, index) => (
          <li key={index}>
            <Link
              href={ally.href}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition duration-300"
            >
              <ally.icon className="text-blue-500 text-xl mr-3" />
              <span className="text-gray-700 font-medium">{ally.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
