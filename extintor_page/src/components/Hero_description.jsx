import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

const Img_hero = () => {
  return (
    <div className="flex justify-around">
      <Card className="w-2/5">
        <CardHeader>
          <h2 className="text-2xl font-bold">Hero Image</h2>
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
      <Card className="w-2/5">
        <CardHeader>
          <h2 className="text-2xl font-bold">Hero Image</h2>
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
