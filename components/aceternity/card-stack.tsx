"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

let interval: any;

type Card = {
  id: number;
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-80 transition-all duration-1000 ease-in-out hover:scale-105 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-60 w-80 flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/[0.1] backdrop-blur-sm dark:border-white/[0.1] dark:bg-neutral-950/90 dark:shadow-white/[0.05] md:h-60 md:w-96"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <Badge
                className="gap-2 font-medium text-neutral-500 dark:text-white"
                variant={"secondary"}
              >
                {card.icon}
                {card.title}
              </Badge>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
