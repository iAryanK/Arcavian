import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { FAQItems } from "@/constants";

const FAQ = () => {
  return (
    <section className="w-full pt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant={"secondary"}>FAQ</Badge>

            <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to the most common questions about our services and
              how we can help your business.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl gap-y-5 px-2 pb-10 pt-5">
          <Accordion type="single" collapsible>
            {FAQItems.map((item, index) => (
              <AccordionItem value={"item-" + index} key={index}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
