import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import { Providers } from "./Providers";

export const metadata = {
  title: "Tienda Extintores",
  description: "Venta de extintores en Cundinamarca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="https://iwinsersanchez.netlify.app/4e1f6738ca0a8e6ae4e8.svg" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="container mx-auto">
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
