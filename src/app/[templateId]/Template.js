"use client";
import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import ReactMarkdown from "react-markdown";
import _ from "lodash";
import { Ovo } from "next/font/google";
import { MdArrowOutward } from "@/icons";
import { LongSkeletonLoader } from "../_components/SkeletonLoader";
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

function Template(props) {
  const { templateName } = props;
  const { pageDetails, fetchPageDetails, dataStatus } = useContext(DataContext);

  useEffect(() => {
    fetchPageDetails({ templateName });
  }, []);

  if (_.get(dataStatus, "isLoading")) {
    return (
      <div className="w-full md:mb-48 mb-96">
        <div className="w-full flex justify-start items-start flex-col gap-10">
          <LongSkeletonLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:mb-48 mb-96">
      <div className="w-full flex justify-start items-start flex-col gap-10">
        <h3 className={`text-[#FFFFFF] font-bold text-3xl ${ovo.className}`}>
          {pageDetails?.name}
        </h3>
        <div className="w-full flex justify-start items-center gap-2">
          {_.map(pageDetails?.tags, (tag) => (
            <span className="bg-[#ea580c] text-[#FFFFFF] px-4 py-1 border-0 rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <ReactMarkdown className="text-[#7E7E7E]">
          {pageDetails?.description}
        </ReactMarkdown>
        <div className="w-full flex justify-start items-center gap-2">
          {pageDetails?.url && (
            <a href={`${pageDetails?.url}`} target="_blank">
              <button className="bg-[#151515] text-[#ffffff] px-4 py-2 font-medium rounded-md flex justify-center items-center gap-2">
                <span>visit</span> <MdArrowOutward />
              </button>
            </a>
          )}
          {pageDetails?.purchaseUrl && (
            <a href={`${pageDetails?.purchaseUrl}`} target="_blank">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 font-medium rounded-md">
                {`Buy Now for ${pageDetails?.price} $`}
              </button>
            </a>
          )}
        </div>

        {pageDetails?.url && (
          <div className="w-full p-2 border-2 border-white/10">
            <iframe
              src={`${pageDetails?.url}`}
              frameborder="0"
              className="w-full h-96"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Template;
