import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonSencillo({ text, image }) {
  return (
    <Button size="lg" className="text-xl font-semibold bg-white" variant="bordered" olor="primary"  isIconOnly={!text}>
      {image ? (
        <img src={image} alt="Icon" className="h-8 w-8" />
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
}
