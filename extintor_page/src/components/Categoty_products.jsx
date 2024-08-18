import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const UnifiedCard = ({
  title,
  subtitle,
  imageSrc,
  footerContent,
  buttonText,
  footerIcon,
  footerTitle,
  footerSubtitle,
  className = "col-span-12 sm:col-span-4",
  imageClassName = "",
}) => (
  <Card className={`h-[300px] ${className}`} isFooterBlurred={!!footerContent}>
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      {subtitle && (
        <p className="text-tiny text-white/60 uppercase font-bold">
          {subtitle}
        </p>
      )}
      {title && <h4 className="text-white font-medium text-large">{title}</h4>}
    </CardHeader>
    <Image
      removeWrapper
      alt="Card background"
      className={`z-0 w-full h-full object-cover ${imageClassName}`}
      src={imageSrc}
    />
    {(footerContent || buttonText || footerIcon) && (
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 bg-black/40">
        {footerContent && <div>{footerContent}</div>}
        {(footerIcon || footerTitle || footerSubtitle) && (
          <div className="flex flex-grow gap-2 items-center">
            {footerIcon && (
              <Image
                alt="Footer icon"
                className="rounded-full w-10 h-11 bg-black"
                src={footerIcon}
              />
            )}
            {(footerTitle || footerSubtitle) && (
              <div className="flex flex-col">
                {footerTitle && (
                  <p className="text-tiny text-white/60">{footerTitle}</p>
                )}
                {footerSubtitle && (
                  <p className="text-tiny text-white/60">{footerSubtitle}</p>
                )}
              </div>
            )}
          </div>
        )}
        {buttonText && (
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            {buttonText}
          </Button>
        )}
      </CardFooter>
    )}
  </Card>
);

export default function CategoryProducts() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
      <UnifiedCard
        title="Stream the Acme event"
        subtitle="What to watch"
        imageSrc="https://nextui.org/images/card-example-4.jpeg"
        footerIcon="https://nextui.org/images/breathing-app-icon.jpeg"
        footerTitle="Breathing App"
        footerSubtitle="Get a good night's sleep."
        buttonText="Get App"
      />
      <UnifiedCard
        title="Contribute to the planet"
        subtitle="Plant a tree"
        imageSrc="https://nextui.org/images/card-example-3.jpeg"
        footerIcon="https://nextui.org/images/breathing-app-icon.jpeg"
        footerTitle="Breathing App"
        footerSubtitle="Get a good night's sleep."
        buttonText="Get App"
      />
      <UnifiedCard
        title="Creates beauty like a beast"
        subtitle="Supercharged"
        imageSrc="https://nextui.org/images/card-example-2.jpeg"
        footerIcon="https://nextui.org/images/breathing-app-icon.jpeg"
        footerTitle="Breathing App"
        footerSubtitle="Get a good night's sleep."
        buttonText="Get App"
      />
      <UnifiedCard
        title="Acme camera"
        subtitle="New"
        imageSrc="https://nextui.org/images/card-example-6.jpeg"
        className="col-span-12 sm:col-span-5"
        imageClassName="scale-125 -translate-y-6"
        footerIcon="https://nextui.org/images/breathing-app-icon.jpeg"
        footerTitle="Breathing App"
        footerSubtitle="Get a good night's sleep."
        buttonText="Get App"
      />
      <UnifiedCard
        title="Your checklist for better sleep"
        subtitle="Your day your way"
        imageSrc="https://nextui.org/images/card-example-5.jpeg"
        footerIcon="https://nextui.org/images/breathing-app-icon.jpeg"
        footerTitle="Breathing App"
        footerSubtitle="Get a good night's sleep."
        buttonText="Get App"
        className="col-span-12 sm:col-span-7"
      />
    </div>
  );
}
