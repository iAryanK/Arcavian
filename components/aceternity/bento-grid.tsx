import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: any;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-2xl dark:border-white/[0.1] dark:dark:bg-[rgba(40,40,40,0.30)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] md:col-span-2",
        className,
      )}
    >
      <div className="flex h-full items-center justify-center">
        <Image
          src={header}
          alt={"header-image"}
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mb-2 mt-2 font-semibold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
