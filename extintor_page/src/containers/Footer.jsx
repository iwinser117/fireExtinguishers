import { Divider, Avatar } from "@nextui-org/react";
import Aliados from "@/components/Aliados";
import RedesSociales from "@/components/RedesSociales";

const Footer = () => {
  return (
    <section className="container font-mono">
      <Divider />
      <footer className="flex flex-col w-full">
        <div className="footerHeader m-4">
          <h3 className="text-xl text-center font-mono font-semibold m-2">
            Extintores para todos
          </h3>
          <p className="footerText">
            Generamos confianza para todos nuestros usuarios, puedes contar con
            un aliado para sus procesos y necesidades. <br /> <br />
            Estamos disponibles para cualquier solicitud y contamos con un
            excelente grupo de aliados para suplir todas nuestra solicitudes.
          </p>
        </div>
        <main className="m-4 flex flex-col">
          <div className="w-full m-2 mx-auto ">
            <h3 className="text-center text-xl font-semibold">Contacto</h3>
            <div className="align-contact">
              <p className="text-center my-4">
                <a href="tel:+57008965349000" className="text-decoration-none">
                  Cotizaciones <br />
                  +57 008965349000
                </a>
              </p>
              <p className="text-center my-4">
                <a
                  href="mailto:juanitoelbarbero@gmail.com"
                  className="text-decoration-none"
                >
                  Email <br />
                  micorreoextintores@apagate.com
                </a>
              </p>
              <p className="text-center my-4">
                <a
                  href="https://wa.me/573001234567123"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp <br />
                  +57 300 1234567123
                </a>
              </p>
            </div>
          </div>
          <div className="w-11/12 mx-auto flex flex-col sm:flex-row md:flex-row my-8 items-center">
            <Aliados />
            <RedesSociales />
          </div>
        </main>
        <section className="m-4">
          <p className="text-center text-small p-footer">v-2024.09 - 1.0.1</p>
        </section>
      </footer>
    </section>
  );
};
export default Footer;
