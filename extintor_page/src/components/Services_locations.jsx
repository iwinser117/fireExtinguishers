import { Divider, Image } from "@nextui-org/react";
import Link from "next/link";

const ServicesLocation = () => {
  return (
    <section className="p-4">
      <main>
        <h2 className="text-2xl text-center font-mono w-full md:w-2/3 mx-auto">
          La atención de nuestros productos y servicios la encuentras para las
          siguientes áreas
        </h2>
      </main>
      <Divider className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 w-full md:w-9/12 mx-auto">
        <Link href="/vivienda" legacyBehavior>
          <a className="md:col-span-2 md:row-span-5 flex flex-col place-content-center transition-all duration-300 hover:brightness-150">
            <div className="relative flex items-center justify-center w-96 mx-auto z-20">
              <h2 className="absolute text-medium z-50 bg-black text-yellow-400 rounded-lg p-2 uppercase">Vivienda</h2>
              <Image
                className="w-full h-auto md:h-full object-cover"
                src="vivienda.jpg"
                alt="imagen de vivienda"
                width={400}
                height={350}
                isBlurred
              />
            </div>
          </a>
        </Link>
        <Link href="/educación" legacyBehavior>
          <a className="md:col-span-2 md:row-span-2 flex flex-col place-content-center transition-all duration-300 hover:brightness-150">
            <div className="relative flex items-center justify-center w-96 mx-auto z-30">
              <h2 className="absolute text-medium z-50 bg-black text-yellow-400 rounded-lg p-2 uppercase">educación</h2>
              <Image
                className="w-full h-auto md:h-full object-cover"
                src="colegio.jpg"
                alt="imagen de colegio"
                width={400}
                height={250}
                isBlurred
              />
            </div>
          </a>
        </Link>
        <Link href="/industria" legacyBehavior>
          <a className="md:col-span-2 md:row-span-2 flex flex-col place-content-center transition-all duration-300 hover:brightness-150">
            <div className="relative flex items-center justify-center w-96 mx-auto z-30">
              <h2 className="absolute text-medium z-50 bg-black text-yellow-400 rounded-lg p-2 uppercase">industrias</h2>
              <Image
                className="w-full h-auto md:h-full object-cover"
                src="industrias.jpg"
                alt="imagen de industrias"
                width={400}
                height={250}
                isBlurred
              />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ServicesLocation;