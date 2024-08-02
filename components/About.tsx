import { Link, Target, Telescope } from "lucide-react";
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

const About = () => {
  return (
    <section className="mt-10 w-full bg-zinc-100 py-12 dark:bg-zinc-900">
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
          </GlareCard>
        </div>
      </div>
    </section>
  );
};

export default About;
