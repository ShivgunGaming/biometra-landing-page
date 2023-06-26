import React from "react";

function Service({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-full max-w-xl items-center justify-center flex flex-col mt-10">
      <div className="w-full flex justify-center px-8">
        <div className="flex h-16 w-full max-w-7xl border-dashed border-l border-r border-stone-800 justify-between">
          <div className="h-16 w-16 border-t-pink-600 border rounded-full border-dashed border-stone-800 -ml-8 mt-8 rotate-45 "></div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-full flex justify-center border-b border-t border-dashed border-stone-800 px-8">
        <div className="tracking-tight w-full text-4xl py-2 text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white font-[900] flex justify-center border-dashed border-l border-r border-stone-800 text-center">
          {title}
        </div>
      </div>
      <div className="w-full flex items-center justify-center border-b border-dashed border-stone-800 px-8">
        <div className="text-md md:text-xl py-4 px-4 md:px-8 font-light tracking-tight text-zinc-400/90 text-start  items-center justify-center h-fit w-full max-w-7xl border-dashed border-l border-r border-stone-800 leading-tight">
          {items.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center px-8">
        <div className="flex h-16 w-full max-w-7xl border-dashed border-l border-r border-stone-800 justify-center">
          <div className="flex h-16 border-none sm:border-dashed border-l border-r border-stone-800 w-96 justify-between">
            <div className="h-16 w-16 -ml-8 -mt-8"></div>
            <div className="h-16 w-16 border-l-pink-600 border-t-pink-600 border rounded-full border-dashed border-stone-800 -mr-8 -mt-8 rotate-45 hidden sm:flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
