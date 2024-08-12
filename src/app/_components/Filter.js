"use client";

import React, { useContext } from "react";

import _ from "lodash";

import { FilterArray } from "@/app/module/utils";
import { DataContext } from "../context/DataContext";

import { IoIosCloseCircle } from "@/icons";

function Filter() {
  const { category, onSelectCategory, onDeSelectFilter, dataStatus } =
    useContext(DataContext);

  return (
    <div className="w-full flex justify-center items-center">
      {_.get(dataStatus, "isData") && (
        <div className="w-full md:w-3/5 flex justify-center items-center gap-3 py-10 flex-wrap">
          {_.map(FilterArray, (item) => {
            return (
              <div
                className={`px-4 py-2 ${
                  _.lowerCase(item?.value) === category
                    ? `bg-primary text-[#ffffff]`
                    : `text-primary bg-[#ffc6a7]`
                }  font-bold rounded-full text-sm flex justify-center items-center gap-2 cursor-pointer`}
                key={item?.id}
              >
                <div
                  className="flex justify-center items-center gap-2"
                  onClick={() =>
                    onSelectCategory({
                      selectedCategory: _.lowerCase(item?.value),
                    })
                  }
                >
                  <item.icon className="text-base" />
                  <span>{item?.label}</span>
                </div>
                {_.lowerCase(item?.value) === category && (
                  <IoIosCloseCircle
                    className="text-xl cursor-pointer"
                    onClick={onDeSelectFilter}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Filter;
