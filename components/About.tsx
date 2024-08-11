import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CardStack } from "./aceternity/card-stack";
import { CardItems } from "@/constants";
import { Highlight } from "./shared/Highlight";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="mt-10 w-full scroll-mt-16 bg-zinc-100 py-12 dark:bg-zinc-900"
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
                <Button className="px-8 max-sm:w-full" asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
