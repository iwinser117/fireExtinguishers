import Link from "next/link";
import { Button } from "@nextui-org/react";

const allies = [
  { name: "Cámaras", href: "/aliados/camaras" },
  { name: "Cercas eléctricas", href: "/aliados/cercas" },
  { name: "Fumigación", href: "/aliados/fumigacion" },
  { name: "Seguridad", href: "/aliados/seguridad" },
  { name: "Alarmas", href: "/aliados/alarmas" },
];

export default function Aliados() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 m-2">
      <h3 className="text-center text-xl font-semibold">Nuestros aliados</h3>
      <p className="p-2 text-pretty">
        Si requieres mas servicios puedes contactar a nuestros aliados
      </p>
      <div className="text-center mt-4 flex flex-wrap">
        {allies.map((ally, index) => (
          <div key={index} className="m-4">
            <Link href={ally.href}>
              <Button radius="full" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                {ally.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
