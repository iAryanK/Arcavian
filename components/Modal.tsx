import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "./aceternity/animated-modal";
import { Highlight } from "./shared/Highlight";
import { ContactForm } from "./ContactForm";
import SendButton from "./SendButton";

export function FormModal({ buttonText }: { buttonText: string }) {
  return (
    <div className="max-sm:w-full">
      <Modal>
        <ModalTrigger>{buttonText}</ModalTrigger>

        <ModalBody className="mx-3 sm:mx-5">
          <ModalContent className="overflow-auto px-2">
            <h4 className="mb-8 text-center text-lg font-bold text-neutral-600 dark:text-neutral-100 md:text-2xl">
              Book your appointment with <Highlight>Arcavian</Highlight> now! 🕊️
            </h4>

            <ContactForm />
          </ModalContent>

          <ModalFooter>
            <SendButton />
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
