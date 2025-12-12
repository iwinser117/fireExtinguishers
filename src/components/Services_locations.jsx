import { Divider, Chip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    title: "Vivienda",
    description: "Apartamentos, conjuntos y copropiedades con planes de inspección programada.",
    image: "/vivienda-min.jpg",
    href: "/vivienda",
  },
  {
    title: "Educación",
    description: "Colegios, universidades y centros de formación con señalización fotoluminiscente.",
    image: "/colegio-min.jpg",
    href: "/educacion",
  },
  {
    title: "Industria",
    description: "Plantas, bodegas y laboratorios con kits especializados y pruebas hidrostáticas.",
    image: "/industrias-min.jpg",
    href: "/industria",
  },
  {
    title: "Comercio",
    description: "Tiendas, restaurantes y oficinas con atención rápida y soporte documental.",
    image: "/img3-min.jpg",
    href: "/comercio",
  },
];

const ServicesLocation = () => {
  return (
    <section className="w-11/12 mx-auto max-w-6xl" aria-labelledby="areas">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="space-y-1">
          <h2 id="areas" className="text-2xl md:text-3xl font-bold text-slate-900">
            Cobertura por sector
          </h2>
          <p className="text-slate-600">Instalación, mantenimiento y señalización adaptada a cada tipo de espacio.</p>
        </div>
        <Chip color="warning" variant="flat">Despliegue en 48h</Chip>
      </div>

      <Divider className="my-4" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {areas.map((area) => (
          <Link key={area.title} href={area.href} className="group relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition duration-300 bg-slate-900">
            <div className="relative h-64 w-full">
              <Image src={area.image} alt={area.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent group-hover:via-slate-900/30 transition" aria-hidden />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-5 space-y-2 text-white">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{area.description}</p>
              <span className="text-xs uppercase tracking-widest text-amber-300">Explorar sector</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesLocation;
