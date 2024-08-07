import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonSencillo({ text, image }) {
  return (
    <Button className="text-xl font-semibold" isIconOnly={!text}>
      {image ? (
        <img src={image} alt="Icon" className="h-6 w-6" />
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
}
