import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full w-full flex-col items-center justify-center pb-10">
          <div>
            {navlinks.map((link, index) => (
              <SheetClose key={index} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "relative mr-5 flex items-center space-x-2 py-3 text-neutral-50 hover:text-neutral-300",
                  )}
                >
                  <span className="cursor-pointer text-2xl font-extralight">
                    {link.name}
                  </span>
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
