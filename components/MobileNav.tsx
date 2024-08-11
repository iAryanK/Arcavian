import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./shared/ThemeToggle";
import { navlinks } from "@/constants";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>

      <SheetContent>
        <div className="relative flex h-full w-full flex-col items-center justify-center pb-10">
          <div>
            {navlinks.map((link, index) => (
              <SheetClose key={index} asChild>
                <Link
                  href={link.link}
                  className={cn(
                    "relative mr-5 flex items-center space-x-2 py-3",
                  )}
                >
                  <span className="cursor-pointer text-2xl font-extralight text-white decoration-blue-500 underline-offset-8 transition-all duration-300 ease-in-out hover:pl-2 hover:text-white/80 hover:underline">
                    {link.name}
                  </span>
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="absolute bottom-0 right-0">
            <SheetClose>
              <ThemeToggle />
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
