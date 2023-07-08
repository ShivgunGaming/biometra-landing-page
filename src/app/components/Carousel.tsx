"use client";
import React, { useEffect, useState, useMemo } from "react";

type CarouselProps = {
  className?: string;
};

function Carousel({ className }: CarouselProps) {
  const items = useMemo(
    () => [
      "Clean & Sleek UX / UI Design!",
      "Unparalleled Encryption!" ,
      "Effortless Transaction Management!",
      "Biometric Authentication!",
      "Biometric Scanning for your Decentralized Privacy!",
      "One Scan, Endless Possibilities!",
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className={className}>
      <div className="flex justify-center items-center h-52 text-white-400 md:my-14">
        <div className="relative h-full flex items-center justify-center">
          {items.map((item, index) => (
            <h2
              key={item}
              className={`absolute h-24 ${
                item === "Use Client" ? "text-lg" : "text-lg"
              } cursor-default text-edge-outline md:text-4xl whitespace-nowrap duration-1000 font-bold tracking-tight text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white ${
                index !== activeIndex
                  ? "translate-y-full opacity-0"
                  : "translate-y-0 opacity-100 transition-all"
              }`}
              style={{
                top: index === activeIndex ? "3rem" : "0",
                padding: "2rem", // Add desired padding value here
                fontFamily: "text-4xl py-2 text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white font-[900] bold", // Add desired font family here
              }}
            >
              {item}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
