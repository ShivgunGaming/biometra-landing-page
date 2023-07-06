"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import InfoBox from "./InfoBox";
import Carousel from "./Carousel";

function Banner() {
  const handleClick = () => {};

  return (
    <div className="w-full items-center justify-center flex flex-col mt-10">
      <InfoBox />
      <div className="w-full flex justify-center px-8">
        <div className="flex h-16 w-full max-w-7xl border-dashed border-l border-r border-stone-800 justify-between">
          <div className="h-16 w-16 border-r-pink-600 border rounded-full border-dashed border-stone-800 -ml-8 mt-8 rotate-45"></div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-full max-w-[1350px] flex items-center justify-center border-b border-t border-dashed border-stone-800 px-8">
        <div className="tracking-tight w-full text-5xl md:text-7xl p-8 max-w-7xl text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 text-center via-zinc-100/80 to-white font-[900]  flex items-center justify-center border-dashed border-l border-r border-stone-800">
          <Carousel />
        </div>
      </div>

      <div className="w-full max-w-[1350px] flex items-center justify-center border-b border-dashed border-stone-800 px-8">
        <div className="text-md md:text-xl p-4 font-light tracking-tight text-zinc-400/90 text-center flex items-center justify-center h-fit w-full max-w-7xl border-dashed border-l border-r border-stone-800 leading-loose">
          {
            "Biometra, your decentralized Web3 wallet for secure asset protection, control, and seamless management in decentralized finance."
          }
        </div>
      </div>
      <div className="w-full max-w-[1350px] flex items-center justify-center border-b border-dashed border-stone-800 px-8">
        <div className="w-full max-w-7xl flex justify-center border-r border-l border-stone-800 border-dashed">
          <div className="p-2 font-light tracking-tight text-zinc-400/90 text-center flex items-center justify-center h-44 max-w-7xl border-none sm:border-dashed border-l border-r border-stone-800 leading-loose w-96 text-sm gap-4">
            <a
              className="border border-black text-black px-7 py-2 rounded-md bg-white/90 hover:border-white/20 font-semibold flex"
              href="https://twitter.com/biometra_net"
            >
              Twitter
              <ArrowUpRightIcon className="w-2 h-2" />
            </a>

            <a
              className="border px-9 py-2 rounded-md border-white/10 hover:border-white/20 font-semibold flex"
              onClick={handleClick}
              href="https://medium.com/@shivanprasad1"
            >
              Medium
              <ArrowUpRightIcon className="w-2 h-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-8">
        <div className="flex h-16 w-full max-w-7xl border-dashed border-l border-r border-stone-800 justify-center">
          <div className="flex h-16 border-none sm:border-dashed border-l border-r border-stone-800 w-96 justify-between">
            <div className="h-16 w-16 -ml-8 -mt-8"></div>
            <div className="h-16 w-16 border-l-pink-600 border rounded-full border-dashed border-stone-800 -mr-8 -mt-8 rotate-45 hidden sm:flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
