import { Badge } from "./ui/badge";
import { ProcessItems } from "@/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "./ui/separator";

const Process = () => {
  return (
    <section id="process" className="mt-10 w-full pt-12">
      <div className="mx-auto max-w-7xl space-y-2 px-4 md:px-6">
        <Badge variant={"secondary"}>Our Process</Badge>

        <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
          How We Work
        </h2>

        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          At Arcavian, we follow a collaborative approach to ensure your
          project&apos;s success. Here&apos;s a step-by-step overview of our
          process.
        </p>
      </div>

      <Processflow />
    </section>
  );
};

export default Process;

const Processflow = () => {
  return (
    <Carousel className="mx-auto max-w-7xl px-5 pt-10">
      <CarouselContent className="-ml-1 pl-1">
        {ProcessItems.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 xl:basis-1/3">
            <div className="flex items-center">
              <ProcessCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
              {index !== ProcessItems.length - 1 && (
                <Separator className="w-32 max-sm:w-20" />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const ProcessCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="mr-1 flex h-60 w-80 flex-col items-center justify-center rounded-3xl border border-[rgba(255,255,255,0.10)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-[rgba(40,40,40,0.70)]">
      <CardHeader>
        <CardTitle>
          <div className="inline-block rounded-full bg-blue-900 p-3 invert dark:invert-0">
            {icon}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold">{title}</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">{description}</p>
      </CardFooter>
    </Card>
  );
};
