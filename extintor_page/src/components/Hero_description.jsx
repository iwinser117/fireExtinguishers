import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

const Img_hero = () => {
  return (
    <div className="flex flex-col  md:justify-around md:flex-row">
      <Card className="w-full md:2/5 m-2 lg:w-5/12" >
        <CardHeader>
          <h2 className="text-2xl font-semibold">Extintores en Bogotá y alrededores</h2>
        </CardHeader>
        <CardBody>
          <p>
            Make beautiful websites regardless of your design experience. Choose
            from a wide range of templates, or start from scratch. Add text,
            images, shapes, and more to create something truly unique.
          </p>
        </CardBody>
        <CardFooter>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full md:2/5 m-2 lg:w-5/12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Lideres en equipos contra incendios</h2>
        </CardHeader>
        <CardBody>
          <p>
            Make beautiful websites regardless of your design experience. Choose
            from a wide range of templates, or start from scratch. Add text,
            images, shapes, and more to create something truly unique.
          </p>
        </CardBody>
        <CardFooter>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Img_hero;
