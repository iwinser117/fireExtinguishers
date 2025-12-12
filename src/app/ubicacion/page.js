'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck, Shield, Navigation, Building2 } from 'lucide-react';
import Footer from '@/containers/Footer';

const branchOffices = [
  {
    city: 'Bogotá',
    address: 'Calle 100 #15-20',
    phone: '+57 1 234 5678',
    tag: 'Principal',
  },
  {
    city: 'Medellín',
    address: 'Carrera 43A #1-50',
    phone: '+57 4 123 4567',
    tag: 'Sucursal',
  },
  {
    city: 'Cali',
    address: 'Avenida 3N #23DN-85',
    phone: '+57 2 987 6543',
    tag: 'Sucursal',
  },
];

const services = [
  {
    icon: Truck,
    title: 'Entrega a domicilio',
    copy: 'Gratis en Bogotá para pedidos superiores a $500.000 COP.',
  },
  {
    icon: Shield,
    title: 'Instalación y mantenimiento',
    copy: 'Expertos certificados para instalaciones y planes de servicio.',
  },
];

export default function UbicacionPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="w-11/12 mx-auto max-w-6xl py-14 space-y-12">
        <header className="text-center space-y-4">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-600 font-semibold">Encuéntranos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Nuestra ubicación y cobertura</h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">Visítanos en Bogotá o agenda servicios en las principales ciudades. Respuesta rápida, equipos listos y soporte en campo.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Sede principal</h2>
                <p className="text-slate-600">Atención en sala, despacho y coordinación de visitas técnicas.</p>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 text-white text-sm font-semibold shadow-md hover:bg-amber-700">
                <Navigation className="w-4 h-4" />
                Ver rutas
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Dirección</p>
                  <p className="font-semibold text-slate-900">Calle 100 #15-20, Bogotá</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>
                  <p className="font-semibold text-slate-900">+57 1 234 5678</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Correo</p>
                  <p className="font-semibold text-slate-900">info@extintores-seguridad.co</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Horario</p>
                  <p className="font-semibold text-slate-900">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 flex items-center justify-center text-center text-amber-800">
              <div>
                <MapPin className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Mapa interactivo disponible en visita</p>
                <p className="text-sm text-amber-700">Estamos en el corredor empresarial de la Calle 100</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-lg p-6 md:p-7 space-y-5">
              <h3 className="text-xl font-semibold text-slate-900">Servicios en tu ubicación</h3>
              <div className="space-y-4">
                {services.map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="flex gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                    <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="text-sm text-slate-600">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-lg p-6 md:p-7 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span>Sucursales</span>
              </div>
              <div className="space-y-4">
                {branchOffices.map((office) => (
                  <div key={office.city} className="flex flex-col gap-1 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-slate-900">{office.city}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{office.tag}</span>
                    </div>
                    <p className="text-sm text-slate-600">{office.address}</p>
                    <p className="text-sm font-medium text-slate-800">Tel: {office.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}