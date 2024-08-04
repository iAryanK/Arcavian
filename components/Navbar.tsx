import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./shared/ThemeToggle";
import { navlinks } from "@/constants";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-2">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image
          src={"/arcavian-logo.png"}
          alt="Arcavian logo"
          width={100}
          height={100}
          className="w-12 invert dark:invert-0"
        />
        <Image
          src={"/arcavian.png"}
          alt="Arcavian"
          width={200}
          height={200}
          className="w-28 overflow-hidden invert dark:invert-0"
        />
        <span className="sr-only">Arcavian</span>
      </Link>

      <div className="flex items-center gap-6 max-sm:hidden">
        <nav className="flex gap-6">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-light underline-offset-4 hover:underline"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-center sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
