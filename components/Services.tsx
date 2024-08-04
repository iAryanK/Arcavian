import { Badge } from "./ui/badge";
import { ServiceBento } from "./ServiceBento";

const Services = () => {
  return (
    <section id="services" className="mt-10 w-full py-12">
      <div className="mx-auto max-w-7xl space-y-2 px-4 md:px-6">
        <Badge variant={"secondary"}>Our Services</Badge>

        <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
          Tailored Solutions for Your Business
        </h2>

        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Weather you&apos;re a well-established business, a startup or even an
          MSME, we have got you covered.
        </p>

        <ServiceBento />
      </div>
    </section>
  );
};

export default Services;
