import { Divider } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const ServicesLocation = () => {
  return (
    <section className="p-4">
      <main>
        <h2 className="text-2xl text-center font-mono w-full md:w-2/3 sm:w-2/3 mx-auto">
          La atención de nuestros productos y servicios la encuentras para las
          siguientes áreas
        </h2>
      </main>
      <Divider className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 w-full mx-auto md:w-full">
        <Link href="/vivienda" legacyBehavior>
          <a className="md:col-span-2 md:row-span-5 flex flex-col place-content-center transition-all duration-300 hover:brightness-150">
            <div className="relative flex items-center justify-center w-full md:w-96 sm :w-96 mx-auto z-20">
              <h2 className="absolute text-medium tracking-widest font-semibold z-50 bg-black text-yellow-400 rounded-lg p-2 uppercase">
                Vivienda
              </h2>
              <Image
                className="object-cover"
                src="/vivienda-min.jpg"
                alt="imagen de vivienda"
                width={400}
                height={350}
                
              />
            </div>
          </a>
        </Link>
        <Link href="/educación" legacyBehavior>
          <a className="md:col-span-2 md:row-span-2 flex flex-col place-content-center transition-all duration-300 hover:brightness-150">
            <div className="relative flex items-center justify-center w-96 mx-auto z-30 w-full md:w-96 sm :w-96">
              <h2 className="absolute text-medium tracking-widest font-semibold z-50 bg-black text-yellow-400 rounded-lg p-2 uppercase">
                educación
              </h2>
              <Image
                className="object-cover"
                src="/colegio-min.jpg"
                alt="imagen de colegio"
                width={400}
                height={250}
                
              />
            </div>
          </a>
        </Link>
        <Link href="/industria" legacyBehavior>
          <a className="md:col-span-2 md:row-span-2 flex flex-col place-content-center transition-all duration-300 hover:brightness-150">
            <div className="relative flex items-center justify-center w-96 mx-auto z-30 w-full md:w-96 sm :w-96">
              <h2 className="absolute text-medium tracking-widest font-semibold z-50 bg-black text-yellow-400 rounded-lg p-2 uppercase">
                industrias
              </h2>
              <Image
                className="object-cover"
                src="/industrias-min.jpg"
                alt="imagen de industrias"
                width={400}
                height={250}
                
              />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ServicesLocation;
