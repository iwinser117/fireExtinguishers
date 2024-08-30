import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { LucideIconName } from 'lucide-react'; // Reemplaza 'LucideIconName' con el nombre del icono que quieras usar

export default function Nosotros() {
  return (
    <section>
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">Nosotros</h1>
        </div>
      </header>

      <main className="px-4 py-12 md:px-8 lg:px-16">
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-base md:text-lg">Nuestra misión es...</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-base md:text-lg">Nuestra visión es...</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Valores</h2>
          <ul className="list-disc pl-5 text-base md:text-lg">
            <li>Valor 1</li>
            <li>Valor 2</li>
            <li>Valor 3</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-base md:text-lg">Desde nuestros comienzos en...</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/path/to/team/member1.jpg" alt="Miembro 1" className="rounded-full mx-auto mb-4 w-24 h-24 lg:w-32 lg:h-32" />
              <h3 className="text-lg md:text-xl font-semibold">Nombre del Miembro</h3>
              <p className="text-sm md:text-base">Cargo</p>
            </div>
            {/* Repite el bloque anterior para otros miembros del equipo */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Testimonios</h2>
          <div>
            {/* Aquí podrías usar un slider para mostrar testimonios */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Contáctanos</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Nombre" className="p-2 border rounded-md" />
            <input type="email" placeholder="Correo" className="p-2 border rounded-md" />
            <textarea placeholder="Mensaje" className="p-2 border rounded-md" rows="4"></textarea>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-2xl md:text-3xl hover:text-blue-500" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-2xl md:text-3xl hover:text-blue-400" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl md:text-3xl hover:text-blue-700" />
            </a>
            {/* Puedes agregar más íconos aquí */}
          </div>
        </div>
      </footer>
    </section>
  );
}
