const MainSection = () => {
  return (
    <main className="image_container_hero w-10/12 mx-auto text-pretty mb-8">
      <section className="bg-gray-100 rounded-lg p-6 shadow-md">
        <div>
          <h3 className="text-center font-bold text-3xl my-6 font-mono">
            Protección contra incendios en Bogotá
          </h3>
          <div>
            <div>
              <p className="text-justify text-xl font-mono">
                Protege lo que más importa con nuestro producto de seguridad
                contra incendios en Bogotá en <strong>Extintores Inc</strong>,
                entendemos la importancia de proteger tu hogar, negocio,
                vehículo, y cualquier otro inmueble. Por eso, te ofrecemos el
                mejor servicio de seguridad contra incendios en Bogotá,
                garantizando que estés siempre preparado. Nuestros servicios
                incluyen:
              </p>
            </div>
            <br />
            <div className="flex flex-col text-xl p-2 content-around items-center text-center sm:flex-col md:flex-row m-6">
              <div className="m-2 w-full">
                <p><strong>Venta</strong>: Equipos de seguridad contra incendios
                  adaptados a tus necesidades.</p>
              </div>
              <div className="m-2 w-full">
                <p><strong>Mantenimiento</strong>: Servicio integral para todo tipo
                  de dispositivos.</p>
              </div>
              <div className="m-2 w-full ">
                <p><strong>Recarga</strong>: Mantenimiento de dispositivos para
                  asegurar su eficacia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
