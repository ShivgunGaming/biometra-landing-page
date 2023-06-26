"use client";
import {
  ArrowUpRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
function Banner() {
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%A0%D0%B0%D0%BB%D0%B5%D0%B2%D0%B8%D1%86%D0%B0%E2%80%9C+84,+1618+%D0%B6.%D0%BA.+%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80%D1%81%D0%BA%D0%B8+%D0%BB%D0%B8%D0%B2%D0%B0%D0%B4%D0%B8+-+%D0%91,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6612846,23.2830126,19.25z/data=!4m5!3m4!1s0x40aa8495676145eb:0x65b8bba93efeefd0!8m2!3d42.6611736!4d23.2829039"
    );
  };
  return (
    <div className="w-full items-center justify-center flex flex-col mt-10">
      <div className="w-full max-w-[1350px] flex items-center justify-center px-8">
        <div className="h-16 w-80 flex justify-center items-center border-none sm:border-dashed border-l border-r border-stone-800 -mb-16">
          <div className="w-60 tracking-tight font-light border rounded-full border-white/10 text-zinc-400/90 flex space-x-2 items-center py-1.5 justify-center bg-stone-900/30 text-sm">
            <ArrowRightCircleIcon className="w-5 h-5 text-sky-500" />

            <span>24/7 София и региона</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-8">
        <div className="flex h-16 w-full max-w-7xl border-dashed border-l border-r border-stone-800 justify-between">
          <div className="h-16 w-16 border-r-pink-600 border rounded-full border-dashed border-stone-800 -ml-8 mt-8 rotate-45"></div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-full max-w-[1350px] flex items-center justify-center border-b border-t border-dashed border-stone-800 px-8">
        <div className="tracking-tight w-full text-5xl md:text-7xl p-8 max-w-7xl text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 text-center via-zinc-100/80 to-white font-[900]  flex items-center justify-center border-dashed border-l border-r border-stone-800">
          Денонощни ключарски услуги
        </div>
      </div>
      <div className="w-full max-w-[1350px] flex items-center justify-center border-b border-dashed border-stone-800 px-8">
        <div className="text-md md:text-xl p-4 font-light tracking-tight text-zinc-400/90 text-center flex items-center justify-center h-fit w-full max-w-7xl border-dashed border-l border-r border-stone-800 leading-loose">
          {
            "Нашата поддръжка е на разположение, за да Ви помогне 24 часа в денонощието, седем дни в седмицата."
          }
        </div>
      </div>
      <div className="w-full max-w-[1350px] flex items-center justify-center border-b border-dashed border-stone-800 px-8">
        <div className="w-full max-w-7xl flex justify-center border-r border-l border-stone-800 border-dashed">
          <div className="p-2 font-light tracking-tight text-zinc-400/90 text-center flex items-center justify-center h-44 max-w-7xl border-none sm:border-dashed border-l border-r border-stone-800 leading-loose w-96 text-sm gap-4">
            <a
              className="border border-black text-black px-7 py-2 rounded-md bg-white/90 hover:border-white/20 font-semibold flex"
              href="tel:+359892062555"
            >
              Телефон
              <ArrowUpRightIcon className="w-2 h-2" />
            </a>

            <button
              className="border px-9 py-2 rounded-md border-white/10 hover:border-white/20 font-semibold flex"
              onClick={handleClick}
            >
              Адрес
              <ArrowUpRightIcon className="w-2 h-2" />
            </button>
          </div>
        </div>{" "}
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
