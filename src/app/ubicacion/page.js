import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck, Shield } from 'lucide-react';

const UbicacionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestra Ubicación</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Dirección Principal</h2>
            <div className="flex items-center mb-3">
              <MapPin className="text-red-500 mr-2" />
              <p>Calle 100 #15-20, Bogotá, Colombia</p>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="text-green-500 mr-2" />
              <p>+57 1 234 5678</p>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="text-blue-500 mr-2" />
              <p>info@extintores-seguridad.co</p>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="text-purple-500 mr-2" />
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-red-500 w-16 h-16 mx-auto mb-2" />
              <p className="text-lg font-semibold">Mapa no disponible</p>
              <p className="text-sm text-gray-600">Estamos ubicados en el corazón de Bogotá</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="flex items-start mb-4">
              <Truck className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Entrega a Domicilio</h3>
                <p>Ofrecemos entrega gratuita en Bogotá para pedidos superiores a $500.000 COP.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Instalación y Mantenimiento</h3>
                <p>Nuestro equipo de expertos está disponible para instalar y dar mantenimiento a sus extintores.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Sucursales</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Medellín</h3>
              <p>Carrera 43A #1-50, Medellín, Antioquia</p>
              <p>Tel: +57 4 123 4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Cali</h3>
              <p>Avenida 3N #23DN-85, Cali, Valle del Cauca</p>
              <p>Tel: +57 2 987 6543</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionPage;