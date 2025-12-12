import { Divider, Button, Chip } from "@nextui-org/react";
import Aliados from "@/components/Aliados";
import RedesSociales from "@/components/RedesSociales";

const Footer = () => {
  return (
    <section className="w-11/12 mx-auto max-w-6xl">
      <Divider />
      <footer className="mt-10 overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-100">
        <div className="px-6 py-10 md:px-12 md:py-12 flex flex-col gap-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-7">
            <div className="space-y-3">
              <p className="uppercase tracking-widest text-xs md:text-sm text-amber-600">Extintores Inc</p>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">Protección contra incendios, clara y rápida</h3>
              <p className="text-slate-700 text-sm md:text-base max-w-2xl">Planes para vivienda, comercio e industria con técnicos certificados y respuesta 24/7.</p>
              <div className="flex gap-2 flex-wrap">
                <Chip size="sm" color="warning" variant="flat" className="font-semibold">RETIE</Chip>
                <Chip size="sm" color="success" variant="flat" className="font-semibold">Garantía</Chip>
                <Chip size="sm" color="primary" variant="flat" className="font-semibold">Atención 24/7</Chip>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <Button
                as="a"
                href="https://wa.me/573001234567123?text=Quiero%20programar%20una%20inspeccion"
                color="warning"
                className="font-semibold shadow-lg shadow-amber-500/30 text-slate-900"
              >
                Programar inspección
              </Button>
              <Button
                as="a"
                href="mailto:micorreoextintores@apagate.com"
                variant="flat"
                color="primary"
                className="font-semibold text-slate-900"
              >
                Escribir por correo
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3 rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h4 className="text-lg md:text-xl font-semibold">Contacto directo</h4>
              <div className="space-y-2 text-slate-700 text-sm md:text-base">
                <a className="block hover:text-slate-900" href="tel:+57008965349000">Cotizaciones: +57 008965349000</a>
                <a className="block hover:text-slate-900" href="mailto:micorreoextintores@apagate.com">micorreoextintores@apagate.com</a>
                <a
                  className="block hover:text-slate-900"
                  href="https://wa.me/573001234567123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +57 300 1234567123
                </a>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h4 className="text-lg md:text-xl font-semibold">Horario y soporte</h4>
              <p className="text-slate-700 text-sm md:text-base">Emergencias 24/7. Visitas técnicas y recargas de lunes a sábado.</p>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Dirección</p>
                <p>Calle 123 # 45 - 67, Bogotá</p>
                <p className="mt-2">Cobertura: Bogotá, Sabana y Cundinamarca.</p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h4 className="text-lg md:text-xl font-semibold">Documentación</h4>
              <ul className="space-y-2 text-slate-700 text-sm md:text-base">
                <li>Bitácoras digitales y reportes fotográficos.</li>
                <li>Certificados de recarga y pruebas hidrostáticas.</li>
                <li>Formatos listos para auditorías y pólizas.</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Aliados />
            <RedesSociales />
          </div>
        </div>
        <Divider className="border-slate-200" />
        <section className="px-6 py-4 text-center text-xs text-slate-500">
          v-2024.09 - 1.0.1 · Extintores Inc
        </section>
      </footer>
    </section>
  );
};
export default Footer;
