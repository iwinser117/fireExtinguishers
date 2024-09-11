import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FireExtinguisher, User, Users, ShieldCheck, Headphones } from 'lucide-react';

import Footer from '@/containers/Footer';

export default function Nosotros() {
  return (
    <section>
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: `url('nosotros-min.png')` }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">Nosotros</h1>
        </div>
      </header>

      <main className="px-4 py-12 md:px-8 lg:px-16">
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-base md:text-lg">Nuestra misión es proporcionar soluciones de seguridad contra incendios de la más alta calidad, garantizando la protección de vidas y propiedades a través de productos confiables y un servicio excepcional.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-base md:text-lg">Ser líderes en la industria de seguridad contra incendios, reconocidos por nuestra innovación, calidad y compromiso con la seguridad de nuestros clientes.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Valores</h2>
          <ul className="list-disc pl-5 text-base md:text-lg">
            <li>Seguridad: Priorizamos la protección de vidas y propiedades en todo lo que hacemos.</li>
            <li>Calidad: Ofrecemos productos y servicios de la más alta calidad sin excepciones.</li>
            <li>Integridad: Actuamos con honestidad y transparencia en todas nuestras operaciones.</li>
            <li>Innovación: Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-base md:text-lg">Desde nuestros comienzos en 1995, nos hemos dedicado a la venta y mantenimiento de extintores de alta calidad. Lo que comenzó como una pequeña tienda local se ha convertido en un referente nacional en seguridad contra incendios, gracias a nuestro compromiso inquebrantable con la excelencia y la satisfacción del cliente.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <User className="mx-auto mb-4 w-24 h-24 lg:w-32 lg:h-32 text-red-500" />
              <h3 className="text-lg md:text-xl font-semibold">María González</h3>
              <p className="text-sm md:text-base">CEO y Fundadora</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto mb-4 w-24 h-24 lg:w-32 lg:h-32 text-blue-500" />
              <h3 className="text-lg md:text-xl font-semibold">Carlos Rodríguez</h3>
              <p className="text-sm md:text-base">Director Técnico</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 w-24 h-24 lg:w-32 lg:h-32 text-green-500" />
              <h3 className="text-lg md:text-xl font-semibold">Laura Martínez</h3>
              <p className="text-sm md:text-base">Gerente de Ventas</p>
            </div>
            <div className="text-center">
              <Headphones className="mx-auto mb-4 w-24 h-24 lg:w-32 lg:h-32 text-purple-500" />
              <h3 className="text-lg md:text-xl font-semibold">Javier López</h3>
              <p className="text-sm md:text-base">Gerente de Servicio</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="italic mb-4">"El servicio y la calidad de los extintores son excepcionales. Nos sentimos seguros sabiendo que contamos con su protección."</p>
              <p className="font-semibold">- Juan Pérez, Gerente de Seguridad, Industrias XYZ</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="italic mb-4">"Su equipo de mantenimiento es profesional y eficiente. Siempre cumplen con los plazos y superan nuestras expectativas."</p>
              <p className="font-semibold">- Ana Gómez, Propietaria, Restaurante El Fogón</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Contáctanos</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Nombre" className="p-2 border rounded-md" />
            <input type="email" placeholder="Correo" className="p-2 border rounded-md" />
            <textarea placeholder="Mensaje" className="p-2 border rounded-md" rows="4"></textarea>
            <button type="submit" className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700">Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
    </section>
  );
}