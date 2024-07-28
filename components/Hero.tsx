import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full py-20 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl/none">
                <span className="heading">Go Digital</span> <br />
                with Arcavian
              </h1>
              <h2 className="pt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-4xl">
                Bringing your business to the <br className="hidden xl:flex" />{" "}
                digital world
              </h2>
              <p className="max-w-[600px] pt-2 text-muted-foreground md:text-xl">
                Arcavian empowers businesses to thrive in the digital era with
                bespoke solutions tailored to your unique needs, ensuring a
                seamless transition into the online world.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="max-sm:w-full">Contact Us</Button>
              <Button variant={"outline"} className="max-sm:w-full">
                Learn More
              </Button>
            </div>
          </div>
          <Image
            src="/arcavian-logo.png"
            width={1000}
            height={1000}
            alt="Hero"
            className="mx-auto aspect-video animate-pulse overflow-hidden rounded-xl object-cover invert max-sm:mt-5 sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
      <div className="pb-40"></div>
    </section>
  );
};

export default Hero;
