"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import DemoContactModal from "./DemoContactModal";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Ubicación", href: "/ubicacion" },
  ];

  const handleLinkClick = (href) => {
    if (pathname !== href) {
      setIsMenuOpen(false);
    }
  };

  const CustomLink = React.forwardRef(({ href, children, ...props }, ref) => (
    <NextLink href={href} passHref legacyBehavior>
      <a ref={ref} {...props} onClick={() => handleLinkClick(href)}>
        {children}
      </a>
    </NextLink>
  ));
  CustomLink.displayName = "CustomLink";

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="mb-4 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="">
          <img src="logoextint.svg" alt="" width={25} />
          <div className="flex flex-col leading-tight">
            <p className="font-bold text-slate-900">Extintores Inc</p>
            <span className="text-[11px] text-amber-700 font-semibold">Respuesta 24/7</span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.href}>
              <Link
                as={CustomLink}
                color="foreground"
                className={`px-3 py-2 rounded-full font-semibold transition-colors ${
                  isActive
                    ? "text-amber-800 bg-amber-100 border border-amber-200"
                    : "text-slate-900 hover:text-amber-700 hover:bg-amber-50"
                }`}
                href={item.href}
                isBlock
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:block">
          <Button
            as={CustomLink}
            color="danger"
            href="#"
            variant="light"
            className="bg-gradient-to-r from-amber-500 to-red-600 font-semibold text-white shadow-md hover:shadow-lg"
            onPress={handleOpenModal}
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={CustomLink}
              href={item.href}
              className="w-full font-semibold"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            fullWidth
            color="danger"
            variant="solid"
            className="mt-2 bg-gradient-to-r from-amber-500 to-red-600 text-white font-semibold"
            onPress={() => {
              setIsMenuOpen(false);
              handleOpenModal();
            }}
          >
            Contáctanos
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
      <DemoContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Navbar>
  );
}
