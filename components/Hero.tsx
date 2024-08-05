import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FormModal } from "./Modal";
import { MoveDown } from "lucide-react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full pt-5">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 py-10">
            <Image
              src="/arcavian-logo.png"
              width={120}
              height={120}
              alt="Hero"
              className="animate-pulse-slow invert dark:invert-0 sm:hidden"
            />

            <div className="space-y-2">
              <h1 className="relative text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl/none">
                <span className="heading">Go Digital</span> <br />
                with Arcavian
                <Image
                  src={"/decor-underline.png"}
                  width={200}
                  height={2}
                  alt="Decor Underline"
                  className="absolute -bottom-2 -translate-x-1/2 transform select-none max-sm:left-[65%] sm:-bottom-5 sm:left-1/2 sm:w-72"
                />
              </h1>
              <h2 className="pt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-4xl">
                Bringing your business to the <br className="hidden xl:flex" />{" "}
                digital world
              </h2>
              <p className="max-w-[600px] pt-2 text-muted-foreground md:text-xl">
                <strong>Arcavian</strong> empowers businesses to thrive in the
                digital era with bespoke solutions tailored to <em>your</em>{" "}
                unique needs, ensuring a seamless transition into the online
                world.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <FormModal buttonText="Get Started" />
              <Button
                variant={"outline"}
                className="px-8 max-sm:w-full"
                asChild
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/arcavian-logo.png"
            width={1000}
            height={1000}
            alt="Hero"
            className="mx-auto aspect-video animate-pulse-slow overflow-hidden rounded-xl object-cover invert dark:invert-0 max-sm:mt-5 max-sm:hidden sm:w-full lg:order-last lg:aspect-square"
          />
        </div>

        <div className="flex items-center justify-center pt-3">
          <div className="animate-bounce rounded-full border border-[rgba(255,255,255,0.10)] bg-gray-100 p-2 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-[rgba(40,40,40,0.70)]">
            <MoveDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
