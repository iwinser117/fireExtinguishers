import { Divider } from "@nextui-org/react";
const MainSection = () => {
  return (
    <main className="image_container_hero w-10/12 mx-auto text-pretty">
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
            <div className="flex flex-col p-2 content-around items-center space-x-4 text-small sm:flex-col md:flex-row">
              <div className="m-2">
                <strong>Venta</strong>: Equipos de seguridad contra incendios
                adaptados a tus necesidades.
              </div>
              <Divider orientation="vertical" />
              <div className="m-2">
                <strong>Recarga</strong>: Mantenimiento de dispositivos para
                asegurar su eficacia.
              </div>
              <Divider orientation="vertical" />
              <div className="m-2">
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
