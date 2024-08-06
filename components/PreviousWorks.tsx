import React from "react";
import { Badge } from "./ui/badge";
import { ExpandableCard } from "./aceternity/expandable-cards";

type Props = {};

const PreviousWorks = (props: Props) => {
  return (
    <section className="mt-10 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-2 py-10 md:px-6">
          <Badge variant={"secondary"}>Showcase</Badge>

          <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
            Projects we have delivered
          </h2>

          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the successful projects we&apos;ve delivered for
            our clients.
          </p>
        </div>

        <ExpandableCard />
      </div>
    </section>
  );
};

export default PreviousWorks;
