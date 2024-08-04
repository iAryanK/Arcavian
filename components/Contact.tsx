import Image from "next/image";
import { ModalProvider } from "./aceternity/animated-modal";
import { FormModal } from "./Modal";
import { Badge } from "./ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="mt-10 w-full">
      <hr />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="space-y-2 py-20 md:px-6">
          <Badge variant={"secondary"}>Contact Us</Badge>

          <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
            Get Set Go
          </h2>

          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? Let&apos;s discuss how we can help your
            business thrive online.
          </p>

          <div className="flex w-full items-center justify-center pt-2 sm:hidden">
            <Image src={"/chat.png"} width={100} height={100} alt="chat" />
          </div>

          <div className="pt-5">
            <FormModal buttonText="Contact Arcavian" />
          </div>
        </div>

        <Image
          src={"/chat.png"}
          width={200}
          height={200}
          alt="chat"
          className="max-sm:hidden"
        />
      </div>
      <hr />
    </section>
  );
};

export default Contact;
