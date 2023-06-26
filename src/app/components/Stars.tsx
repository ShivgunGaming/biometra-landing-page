import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function Stars() {
  return (
    <div className="flex text-zinc-400/90 tracking-tight font-light py-4 mt-10">
      <StarIcon className="w-5 h-5 text-sky-500" />
      <StarIcon className="w-5 h-5 text-sky-500" />
      <StarIcon className="w-5 h-5 text-sky-500" />
      <StarIcon className="w-5 h-5 text-sky-500" />
      <div className="w-2.5 overflow-hidden">
        <StarIcon className="w-5 h-5 text-sky-500" />
      </div>{" "}
      <div className="w-2.5 overflow-hidden">
        <StarIcon className="w-5 h-5 text-white -ml-2.5" />
      </div>
      <span className="ml-2">
        <span className="">4.68</span>
        <span className=""> stars on Google</span>
      </span>
    </div>
  );
}

export default Stars;
