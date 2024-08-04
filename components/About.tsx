import { Target, Telescope } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlareCard } from "./aceternity/glare-card";
import Image from "next/image";
import { CardStack } from "./aceternity/card-stack";
import { CardItems } from "@/constants";
import { Highlight } from "./shared/Highlight";

const About = () => {
  return (
    <section
      id="about"
      className="mt-10 w-full bg-zinc-100 py-12 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant={"secondary"}>About Arcavian</Badge>

            <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
              Transforming businesses online
            </h2>

            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              If you&apos;re someone who owns a business or building a startup
              and you&apos;re ambitious to spread your business over the globe,
              you&apos;re at the right place.
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 pt-10 max-sm:flex-col">
          {/* <GlareCard className="flex flex-col items-center justify-center">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A person holding a camera"
              fill
            />
            <div className="z-10">
              <Card className="border-none bg-transparent">
                <CardHeader>
                  <CardTitle>
                    <Badge className="py-2">
                      <Telescope />
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    To be the leading provider of innovative digital solutions,
                    helping businesses across the globe unlock their full
                    potential.
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge variant={"secondary"}>Our Vision</Badge>
                </CardFooter>
              </Card>
            </div>
          </GlareCard>

          <GlareCard className="flex flex-col items-center justify-center">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A person holding a camera"
              fill
            />
            <div className="z-10">
              <Card className="border-none bg-transparent">
                <CardHeader>
                  <CardTitle>
                    <Badge className="py-2">
                      <Target />
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    To be the leading provider of innovative digital solutions,
                    helping businesses across the globe unlock their full
                    potential.
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge variant={"secondary"}>Our Mission</Badge>
                </CardFooter>
              </Card>
            </div>
          </GlareCard> */}

          <div className="px-4 pt-5 md:px-6">
            <div className="flex flex-col items-center justify-between gap-x-14 gap-y-10 lg:flex-row">
              <CardStack items={CardItems} />
              <div className="flex max-w-md flex-col items-start space-y-6">
                <h3 className="rounded-b-3xl rounded-t-xl bg-gradient-to-r from-zinc-100/80 via-zinc-100/80 to-blue-500 px-4 py-1 text-lg font-bold dark:from-blue-500 dark:via-zinc-900/80">
                  Why Arcavian ?
                </h3>
                <p className="mx-auto max-w-xl text-justify text-muted-foreground md:text-xl/relaxed">
                  At <strong>Arcavian</strong>, we combine our expertise in
                  custom application development with a deep{" "}
                  <Highlight>understanding of your industry</Highlight> to
                  deliver tailored solutions that drive your business forward.
                  From strategy to implementation, we&apos;re your{" "}
                  <Highlight>trusted partner</Highlight> in digital
                  transformation.
                </p>
                <Button className="px-8 max-sm:w-full">Get in touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
