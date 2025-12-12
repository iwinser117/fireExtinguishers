import { Button, Chip } from "@nextui-org/react";
import { FaWhatsapp, FaShieldAlt, FaClock, FaFireExtinguisher } from "react-icons/fa";

const Img_hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-red-800 to-orange-600 text-white shadow-2xl px-6 py-14 md:px-12">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #ffffff30 0, transparent 35%), radial-gradient(circle at 80% 10%, #ffffff25 0, transparent 35%), radial-gradient(circle at 20% 80%, #ffffff15 0, transparent 40%)" }} />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/20">
            <FaFireExtinguisher className="text-xl" />
            <span className="text-sm font-semibold tracking-wide uppercase">Equipos certificados • Bogotá y alrededores</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Protege cada espacio con expertos en contra incendios
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Venta, recarga y mantenimiento de extintores industriales y residenciales, inspecciones rápidas y acompañamiento 24/7 para tu tranquilidad.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://wa.me/573001234567123?text=Hola%20quiero%20una%20cotizacion%20de%20extintores"
              color="warning"
              size="lg"
              className="text-base font-semibold shadow-lg shadow-orange-500/40"
              startContent={<FaWhatsapp />}
            >
              Cotizar por WhatsApp
            </Button>
            <Button
              as="a"
              href="#servicios"
              variant="bordered"
              color="warning"
              size="lg"
              className="text-base font-semibold border-white/50 text-white"
            >
              Ver servicios
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <FaShieldAlt />
                <span>Certificación RETIE</span>
              </div>
              <p className="text-2xl font-bold mt-2">100% equipos verificados</p>
              <p className="text-sm text-white/70">Garantía y acompañamiento técnico.</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <FaClock />
                <span>Respuestas ágiles</span>
              </div>
              <p className="text-2xl font-bold mt-2">24/7</p>
              <p className="text-sm text-white/70">Atención de emergencias y soporte.</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Chip size="sm" color="warning" variant="flat">Planes</Chip>
                <span>Empresas y hogares</span>
              </div>
              <p className="text-2xl font-bold mt-2">+1200 instalaciones</p>
              <p className="text-sm text-white/70">Cobertura en Bogotá y Cundinamarca.</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 blur-3xl bg-orange-400/40 rounded-full" aria-hidden />
            <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-white/70">Kit de respuesta</div>
                <Chip size="sm" color="success" variant="flat">Listo para instalar</Chip>
              </div>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Extintores multipropósito ABC, CO2 y K
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Señalización fotoluminiscente y gabinetes
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Planes de mantenimiento y recarga anual
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Instalación certificada y pruebas hidrostáticas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Img_hero;
