"use client";

import Link from "../links";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import { Pages, Routes } from "@/src/constans/enum";
import { useParams, usePathname } from "next/navigation";

function NavBar({ translations }: { translations: { [key: string]: string } }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { locale } = useParams();
  const pathname = usePathname();
  console.log(pathname, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  const links = [
    { title: translations.menu, href: Routes.MENU },
    { title: translations.about, href: Routes.ABOUT },
    { title: translations.contact, href: Routes.CONTACT },
    { title: translations.login, href: `${Routes.AUTH}/${Pages.LOGIN}` },
  ];
  return (
    <nav className="flex flex-1 justify-end">
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <Menu className="w-6! h-6! " />
      </Button>
      <ul
        className={`fixed lg:static ${openMenu ? "left-0 z-50" : "-left-full"} top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <XIcon className="w-6! h-6! " />
        </Button>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={`/${locale}/${link.href}`}
              className={`${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? `${buttonVariants({ size: "lg" })} !px-8 !rounded-full ` : "text-accent hover:text-primary duration-200 transition-colors "}font-semibold  ${pathname.startsWith(`/${locale}/${link.href}`) ? "text-primary" : "text-accent"}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
