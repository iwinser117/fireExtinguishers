'use client';

import { Users, ShieldCheck, Headphones, Award, Target, Sparkles } from 'lucide-react';

import Footer from '@/containers/Footer';

const values = [
  { title: 'Seguridad', description: 'Protegemos vidas y activos con estándares estrictos y verificados.' },
  { title: 'Calidad', description: 'Equipos certificados, mantenimiento trazable y soporte experto.' },
  { title: 'Integridad', description: 'Transparencia total en diagnósticos, precios y cumplimiento.' },
  { title: 'Innovación', description: 'Actualizamos tecnologías y procesos para anticipar riesgos.' },
];

const leaders = [
  { name: 'María González', role: 'CEO y Fundadora', Icon: Target },
  { name: 'Carlos Rodríguez', role: 'Director Técnico', Icon: ShieldCheck },
  { name: 'Laura Martínez', role: 'Gerente de Ventas', Icon: Users },
  { name: 'Javier López', role: 'Gerente de Servicio', Icon: Headphones },
];

const milestones = [
  { year: '1995', detail: 'Fundamos la operación con foco en extintores certificados.' },
  { year: '2008', detail: 'Expansión a servicios integrales: señalización, gabinetes y luces.' },
  { year: '2020', detail: 'Digitalizamos inspecciones y trazabilidad de mantenimiento.' },
];

export default function Nosotros() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="w-11/12 mx-auto max-w-6xl py-14 space-y-12">
        <header className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-10 md:p-14">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url('nosotros-min.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative space-y-4 max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-xs text-amber-300 font-semibold">Quiénes somos</p>
            <h1 className="text-4xl md:text-5xl font-extrabold">Más de 25 años protegiendo operaciones</h1>
            <p className="text-slate-100 text-lg">Soluciones integrales contra incendios, equipo certificado y acompañamiento técnico de punta a punta.</p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 text-amber-700">
              <Target className="w-6 h-6" />
              <p className="text-sm font-semibold uppercase tracking-wide">Misión</p>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Seguridad confiable, servicio cercano</h2>
            <p className="text-slate-700">Proporcionar soluciones de seguridad contra incendios de la más alta calidad, garantizando la protección de vidas y propiedades con productos confiables y servicio excepcional.</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 text-amber-700">
              <Sparkles className="w-6 h-6" />
              <p className="text-sm font-semibold uppercase tracking-wide">Visión</p>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Liderar con innovación y cercanía</h2>
            <p className="text-slate-700">Ser referentes en la industria por innovación, calidad y compromiso con la seguridad de nuestros clientes en cada proyecto y visita de campo.</p>
          </div>
        </div>

        <section className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Award className="w-5 h-5 text-amber-600" />
            <span>Valores que nos mueven</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <p className="text-lg font-semibold text-slate-900">{value.title}</p>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-8 space-y-5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>Trayectoria</span>
            </div>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.year} className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50">
                  <div className="h-10 w-16 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">{item.year}</div>
                  <p className="text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-8 space-y-5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Users className="w-5 h-5 text-amber-600" />
              <span>Liderazgo</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {leaders.map(({ name, role, Icon }) => (
                <div key={name} className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{name}</p>
                      <p className="text-sm text-slate-600">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.3em] text-xs text-amber-300 font-semibold">A tu lado</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Listos para visitar tu planta o proyecto</h2>
            <p className="text-slate-100 text-lg">Coordina inspecciones, mantenimiento o capacitación. Respuesta en menos de 24 horas hábiles.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Soporte 24/7</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Cobertura nacional</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Trazabilidad de servicio</span>
            </div>
          </div>
          <form className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700">Nombre</label>
              <input type="text" className="w-full mt-1 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nombre" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Correo</label>
              <input type="email" className="w-full mt-1 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="correo@empresa.com" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Mensaje</label>
              <textarea rows="4" className="w-full mt-1 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Cuéntanos qué necesitas"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700">Enviar</button>
          </form>
        </section>
      </section>
      <Footer />
    </main>
  );
}