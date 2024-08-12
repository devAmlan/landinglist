"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Item(props) {
  const { item } = props;

  const router = useRouter();

  const onClickPageDetails = () => {
    router.push(encodeURIComponent(`${item?.name}`));
  };

  return (
    <div
      className="w-full h-full md:h-64 bg-gradient-to-b from-white/5 to-white/10 p-1 shadow-2xl shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm rounded-md"
      onClick={onClickPageDetails}
    >
      <div className="w-full h-full rounded-md relative bg-[#0F0F0F] overflow-hidden cursor-pointer">
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/landixpot.appspot.com/o/image%2F${item?.screenshotUrl}`}
          loading="lazy"
          alt="nebula"
          className="w-full h-full transition duration-300 ease-in-out hover:scale-110 rounded-md"
        />
        <div className="absolute bottom-3 left-3 w-[calc(100%-24px)] flex justify-start items-center gap-3">
          <span className="bg-[#ea580c] text-[#FFFFFF] px-4 py-1 border-0 rounded-full text-xs font-semibold">
            {item?.name}
          </span>
          <span className="bg-[#ea580c] text-[#FFFFFF] px-4 py-1 border-0 rounded-full text-xs font-semibold">
            {item?.price} $
          </span>
        </div>
      </div>
    </div>
  );
}

export default Item;
