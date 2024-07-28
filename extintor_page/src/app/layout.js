import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import { Providers } from "./Providers";

export const metadata = {
  title: "Landing Page Extintores",
  description: "venta de extintores en cundinamarca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
