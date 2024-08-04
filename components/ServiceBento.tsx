import { BentoGrid, BentoGridItem } from "./aceternity/bento-grid";
import { serviceItems } from "@/constants";

export function ServiceBento() {
  return (
    <BentoGrid className="mx-auto max-w-4xl pt-10 md:auto-rows-[20rem]">
      {serviceItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
