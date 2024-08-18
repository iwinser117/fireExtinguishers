"use client";
import React from "react";
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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Ubicación", href: "#" },
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
      className="mb-4"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="">
          <img src="logoextint.svg" alt="" width={25} />
          <p className="font-bold text-inherit">Extintores Inc</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link as={CustomLink} color="foreground" href={item.href} isBlock>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={CustomLink}
            color="danger"
            href="#"
            variant="light"
            className="bg-gradient-to-r from-red-600 to-yellow-300 font-semibold text-gray-950"
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
              className="w-full"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
