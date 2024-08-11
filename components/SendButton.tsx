"use client";

import React from "react";
import { Button } from "./ui/button";
import { BottomGradient } from "./ContactForm";
import { useModal } from "./aceternity/animated-modal";
import { Loader2 } from "lucide-react";
import { sendMail } from "@/lib/actions";
import { useToast } from "./ui/use-toast";

type Props = {
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  setData: (data: any) => void;
};

const SendButton = ({
  isSubmitting,
  setIsSubmitting,
  data,
  setData,
}: Props) => {
  const { setOpen } = useModal();
  const { toast } = useToast();

  const initialvalues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (data.name == "" || data.email == "" || data.message == "") {
      setIsSubmitting(false);
      return toast({
        title: "Please enter the required fields.",
        description: "Phone number is the only optional field.",
      });
    }

    if (
      !data.email.endsWith("@gmail.com") &&
      !data.email.endsWith("@hotmail.com") &&
      !data.email.endsWith("@outlook.com")
    ) {
      setIsSubmitting(false);
      return toast({
        title: "Sorry!",
        description: "Only gmail, hotmail and outlook Mail IDs are accepted.",
      });
    }

    const res = await sendMail({ data });
    setIsSubmitting(false);

    if (res) {
      setData(initialvalues);
      setOpen(false);
      return toast({
        title: "Thank you!",
        description: "I will get back to you soon.",
      });
    } else {
      return toast({
        title: "Apologies!",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <div className="flex gap-4">
      <Button variant={"ghost"} onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button
        className="group/btn relative block h-10 w-fit rounded-md bg-gradient-to-br from-blue-700 to-blue-900 px-6 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
        onClick={handleSendMessage}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            Sending <Loader2 size={18} className="animate-spin" />
          </div>
        ) : (
          <>Send Message &rarr;</>
        )}
        <BottomGradient />
      </Button>
    </div>
  );
};

export default SendButton;
