"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DataContext } from "@/app/context/DataContext";

function NavBar() {
  const { onDeSelectFilter, fetchLandingPageList } = useContext(DataContext);
  const router = useRouter("");

  const onLoadFetchLandingPageList = () => {
    router.push("/");
    onDeSelectFilter();
    fetchLandingPageList();
  };
  return (
    <div className="w-full flex justify-between items-center p-2 mb-10 ring-2 ring-white/10 rounded-md">
      <div
        className="flex justify-center items-center gap-3 cursor-pointer"
        onClick={onLoadFetchLandingPageList}
      >
        <Image width={24} height={24} src={"/logo.svg"} />
        <h3 className="text-white text-base font-bold">Landinglist.xyz</h3>
      </div>
      <a href="https://tally.so/r/wzZeV1" target="_blank">
        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 font-medium rounded-md">
          Submit
        </button>
      </a>
    </div>
  );
}

export default NavBar;
