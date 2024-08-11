import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mx-auto flex max-w-7xl shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-sm font-light text-muted-foreground">
        &copy; 2024 Arcavian. All rights reserved.
      </p>

      <nav className="flex items-center gap-4 sm:ml-auto sm:gap-6">
        <Link
          href="https://www.linkedin.com/in/iaryan/"
          className="text-xs underline-offset-4 hover:underline"
          target="_blank"
          prefetch={false}
        >
          <Linkedin
            size={28}
            className="rounded-sm bg-zinc-300 p-1 transition-all duration-300 hover:scale-105 dark:bg-zinc-800"
          />
        </Link>
        <Link
          href="https://iaryan.tech"
          className="text-xs underline-offset-4 hover:underline"
          target="_blank"
          prefetch={false}
        >
          <div className="rounded-sm bg-zinc-300 p-1 transition-all duration-300 hover:scale-105 dark:bg-zinc-800">
            <Image
              src="/img384.png"
              alt="Founder"
              width={48}
              height={48}
              className="h-[19px] w-[19px] rounded-full"
            />
          </div>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
