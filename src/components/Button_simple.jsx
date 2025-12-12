import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonSencillo({ text = "Hablemos", image, href = "#", color = "warning" }) {
  return (
    <Button
      as="a"
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      size="lg"
      color={color}
      className="text-base font-semibold shadow-md"
      variant={text ? "solid" : "bordered"}
      isIconOnly={!text}
      startContent={image ? <img src={image} alt="Icono" className="h-8 w-8" /> : null}
    >
      {text || ""}
    </Button>
  );
}
