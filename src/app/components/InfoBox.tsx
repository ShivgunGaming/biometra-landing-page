import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

function InfoBox() {
  const link = "https://chrome.google.com/webstore/detail/biometra/geeojnpimoehffcokhkikhbobigpffck";

  return (
    <div className="h-16 w-80 flex justify-center items-center border-none sm:border-dashed border-l border-r border-stone-800 -mb-16">
      <div className="relative h-9 group my-10 w-60 rounded-full justify-center flex items-center overflow-clip">
        <div
          className="absolute m-auto flex inset-1 bg-gradient-to-r from-sky-500 to-pink-500 h-9 filter blur-md opacity-60 animate-spin"
          style={{
            animationDuration: "4s",
          }}
        ></div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-60 relative tracking-tight font-light border rounded-full border-white/10 text-zinc-400/90 flex space-x-2 items-center py-1.5 justify-center bg-zinc-950 text-sm"
        >
          <ArrowRightCircleIcon className="w-5 h-5 text-sky-500" />
          <span>Check us out, LFG 🚀</span>
        </a>
      </div>
    </div>
  );
}

export default InfoBox;
