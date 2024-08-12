"use client";
import React from "react";
import _ from "lodash";

function SkeletonLoader() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      {_.map(_.fill(Array(2)), (item, index) => {
        return (
          <div
            className="w-full h-64 bg-[#0F0F0F] p-1 border border-[#0F0F0F] rounded-md animate-pulse relative"
            key={index}
          >
            <div className="absolute bottom-3 left-3 w-[calc(100%-24px)] flex justify-start items-center gap-3">
              <span className="bg-[#191919] h-6 w-20 border-0 rounded-full text-xs font-semibold"></span>
              <span className="bg-[#191919] h-6 w-20 border-0 rounded-full text-xs font-semibold"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LongSkeletonLoader() {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-8 animate-pulse">
      <div className="w-1/4 h-5 bg-[#191919] rounded"></div>
      <div className="w-full flex justify-start items-start gap-2">
        {_.map(_.fill(Array(3)), (item, index) => {
          return (
            <div
              className="w-20 h-3 bg-[#191919] p-1 rounded-full"
              key={index}
            ></div>
          );
        })}
      </div>
      <div className="w-full flex justify-start items-start flex-col gap-2">
        {_.map(_.fill(Array(5)), (item, index) => {
          return (
            <div
              className={`w-full h-2 bg-[#191919] rounded`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export { SkeletonLoader, LongSkeletonLoader };
