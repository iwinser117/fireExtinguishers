import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FaCheckCircle, FaTruck, FaTools, FaCertificate } from "react-icons/fa";

const cards = [
  {
    title: "Cobertura integral",
    description:
      "Venta, instalación y mantenimiento de extintores, gabinetes y señalización con tiempos de respuesta inferiores a 24 horas en Bogotá.",
    icon: FaTruck,
  },
  {
    title: "Equipo certificado",
    description:
      "Extintores ABC, CO2 y K con certificación RETIE y soporte técnico para auditorías, inspecciones y planes de emergencia.",
    icon: FaCertificate,
  },
  {
    title: "Mantenimiento claro",
    description:
      "Recargas, pruebas hidrostáticas y bitácoras digitales para que tengas trazabilidad y vigencia al día sin papeleo.",
    icon: FaTools,
  },
  {
    title: "Acompañamiento experto",
    description:
      "Asesoría para hogares, comercios y plantas industriales. Diseñamos kits a medida con visitas in situ y seguimiento.",
    icon: FaCheckCircle,
  },
];

const Img_hero = () => {
  return (
    <section id="servicios" className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Card
          key={card.title}
          className="border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 bg-white"
        >
          <CardHeader className="flex gap-3 items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 text-xl">
              <card.icon />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
              <p className="text-sm text-slate-500">Protección que inspira confianza.</p>
            </div>
          </CardHeader>
          <CardBody className="pt-0 text-slate-700 leading-relaxed">
            {card.description}
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default Img_hero;
