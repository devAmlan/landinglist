"use client";
import React, { useContext } from "react";
import Item from "./Item";
import { DataContext } from "../context/DataContext";
import { SkeletonLoader } from "./SkeletonLoader";
import _ from "lodash";
import { MdEmojiEmotions } from "@/icons";

function LandingPage() {
  const {
    pageList,
    fetchLandingPageList,
    dataStatus,
    handleLoadMore,
    totalPages,
    page,
  } = useContext(DataContext);

  const onLoadFetchLandingPageList = () => {
    fetchLandingPageList();
  };

  if (_.get(dataStatus, "isLoading")) {
    return (
      <div className="mb-48">
        <SkeletonLoader />
      </div>
    );
  }

  if (_.get(dataStatus, "isError")) {
    return (
      <div className="w-full flex justify-center items-center flex-col gap-5 mb-48">
        <h3 className="text-red-600">Something went wrong,Please try again</h3>
        <button
          className="px-4 py-2 bg-red-600 rounded-md text-white font-semibold"
          onClick={onLoadFetchLandingPageList}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 mb-48">
      {!_.isEmpty(pageList) && (
        <div className="w-full flex justify-center items-center flex-col gap-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            {_.map(pageList, (item) => {
              return <Item item={item} key={item?._id} />;
            })}
          </div>
          {page < totalPages && (
            <button
              onClick={handleLoadMore}
              disabled={_.get(dataStatus, "isLoading")}
              className="px-4 py-2 border-0 bg-[#FFB200] text-[#000000] font-semibold rounded-md"
            >
              {_.get(dataStatus, "isLoading") ? "Loading..." : "Show me more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
