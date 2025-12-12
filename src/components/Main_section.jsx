import { FaTools, FaFireExtinguisher, FaRegClipboard } from "react-icons/fa";
import { Chip } from "@nextui-org/react";

const services = [
  {
    title: "Venta y alquiler",
    description: "Extintores ABC, CO2 y K listos para entrega con kits completos de señalización y gabinetes.",
    icon: FaFireExtinguisher,
  },
  {
    title: "Mantenimiento y recarga",
    description: "Pruebas hidrostáticas, recargas certificadas y visitas programadas para no perder vigencia.",
    icon: FaTools,
  },
  {
    title: "Inspecciones y planes",
    description: "Bitácoras digitales, planes de emergencia y acompañamiento en auditorías y pólizas.",
    icon: FaRegClipboard,
  },
];

const MainSection = () => {
  return (
    <section className="w-11/12 mx-auto max-w-6xl text-pretty" aria-labelledby="proteccion">
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">Protección contra incendios</p>
            <h3 id="proteccion" className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Bogotá, Cundinamarca y apoyo nacional
            </h3>
            <p className="text-slate-600 mt-3 max-w-2xl">
              Diseñamos soluciones de seguridad que cumplen norma y llegan rápido: logística propia, técnicos certificados y soporte antes, durante y después de la instalación.
            </p>
          </div>
          <Chip color="warning" variant="flat" className="text-sm font-semibold">Visita técnica en menos de 48h</Chip>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-8">
          {services.map((service) => (
            <div key={service.title} className="h-full rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3 text-orange-500">
                <service.icon className="text-2xl" />
                <h4 className="text-lg font-semibold text-slate-900">{service.title}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3 text-sm text-slate-600">
          <span className="rounded-full bg-orange-50 text-orange-700 px-4 py-2 border border-orange-100 text-center">Garantía y póliza de cumplimiento</span>
          <span className="rounded-full bg-slate-50 px-4 py-2 border border-slate-100 text-center">Inventario listo para entrega</span>
          <span className="rounded-full bg-slate-50 px-4 py-2 border border-slate-100 text-center">Reportes fotográficos y trazabilidad digital</span>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
