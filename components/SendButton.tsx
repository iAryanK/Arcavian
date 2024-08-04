"use client";

import React from "react";
import { Button } from "./ui/button";
import { BottomGradient } from "./ContactForm";
import { useModal } from "./aceternity/animated-modal";

const SendButton = () => {
  const { setOpen } = useModal();

  const handleSendMessage = () => {
    setOpen(false);
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
        Send Message &rarr;
        <BottomGradient />
      </Button>
    </div>
  );
};

export default SendButton;
