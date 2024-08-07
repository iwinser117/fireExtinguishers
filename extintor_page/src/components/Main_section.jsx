const MainSection = () => {
  return (
    <main className="image_container_hero w-10/12 mx-auto text-pretty mb-8">
      <section className="">
        <div>
          <h3 className="text-center font-semibold text-2xl m-4">
            Protección contra incendios en Bogotá
          </h3>
          <div>
            <div>
              <p>
                Protege lo que más importa con nuestro servicio de seguridad
                contra incendios en Bogotá en <strong>Extintores Inc</strong>,
                entendemos la importancia de proteger tu hogar, negocio,
                vehículo, y cualquier otro inmueble. Por eso, te ofrecemos el
                mejor servicio de seguridad contra incendios en Bogotá,
                garantizando que estés siempre preparado. Nuestros servicios
                incluyen:
              </p>
            </div>
            <br />
            <div className="flex flex-col p-2 content-around items-center  text-medium sm:flex-col md:flex-row">
              <div className="m-2 w-full">
                <strong>Venta</strong>: Equipos de seguridad contra incendios
                adaptados a tus necesidades.
              </div>
              <div className="m-2 w-full ">
                <strong>Recarga</strong>: Mantenimiento de dispositivos para
                asegurar su eficacia.
              </div>
              <div className="m-2 w-full">
                <strong>Mantenimiento</strong>: Servicio integral para todo tipo
                de dispositivos.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
