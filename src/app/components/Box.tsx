import React from "react";

function Box({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border px-7 py-4 border-white/5 bg-black/50 cursor-pointer hover:black/20 hover:bg-opacity-30 w-72">
      <h2 className="inline-block transition-transform text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 text-center via-zinc-100/80 to-white mb-3 text-2xl font-semibold">
        {name}
      </h2>
      <p
        className={`m-0 max-w-[30ch] text-sm tracking-tight font-light text-zinc-400/90`}
      >
        {description}
      </p>
    </div>
  );
}

export default Box;
