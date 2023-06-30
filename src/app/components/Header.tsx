import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Header() {
  const logoImage = (
    <StaticImage
      src="./biometra.png"
      alt="Logo"
      className="h-8"
    />
  );

  return (
    <div className="px-5 py-2 flex cursor-pointer border-b border-white/5 w-full justify-center bg-black/70 backdrop-blur-md items-center">
      <div className="max-w-[1350px] w-full text-sm font-light tracking-tight justify-between">
        <h1 className={`mb-3 text-2xl font-semibold whitespace-nowrap`}>
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-extrabold tracking-tight text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white">
            {logoImage}
            Biometra
          </span>
        </h1>
        <p className={`-mt-5 text-sm text-zinc-400/90`}>One Scan, Endless Possibilities</p>
      </div>
    </div>
  );
}

export default Header;
