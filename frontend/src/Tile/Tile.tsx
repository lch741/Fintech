import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const Tile = ({ title, subtitle }: Props) => {
  return (
  <div className="w-full lg:w-6/12 xl:w-3/12 px-4 min-w-[200px]">
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full max-w-full flex-grow flex-1 min-w-0">
            <h5 className="text-blueGray-400 uppercase font-bold text-xs whitespace-nowrap">
              {title}
            </h5>
            <span className="font-bold text-xl whitespace-nowrap">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Tile;