import React from "react";

function Footer() {
  return (
    <div className="px-5 py-2 flex sticky top-0 cursor-pointer border-t border-white/5 w-full justify-center bg-black/70">
      <div className="max-w-[1350px] flex-wrap-reverse gap-2 w-full text-sm font-light tracking-tight justify-between flex">
        <div>
          <h1 className={`mb-3 text-2xl font-semibold whitespace-nowrap`}>
            <span className="inline-block transition-transform group-hover:translate-x-1  motion-reduce:transform-none font-extrabold tracking-tight text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white">
              Biometra
            </span>{" "}
          </h1>
          <p className={`-mt-5 text-sm text-zinc-400/90`}>One Scan, Endless Possibilities</p>
        </div>
        <div className="text-end">
          <span className="text-sm text-zinc-400/90">
            2023 Copyright
          </span>{" "}
          <p className={`text-sm text-zinc-400/90`}>© Biometra</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
