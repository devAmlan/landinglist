"use client";
import React, { useState, useEffect, createContext } from "react";
import {
  getLandingPageQuery,
  getLandingPageDetailsQuery,
} from "@/app/module/module";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [pageList, setPageList] = useState([]);
  const [pageDetails, setPageDetails] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dataStatus, setDataStatus] = useState({
    isLoading: false,
    isData: false,
    isError: false,
  });

  const fetchLandingPageList = async () => {
    try {
      setDataStatus((prev) => ({
        ...prev,
        isLoading: true,
      }));

      const response = await getLandingPageQuery({
        input: { page, tag: category },
      });

      if (response?.data) {
        if (page === 1) {
          setPageList(response?.data);
        } else {
          setPageList((prev) => [...prev, ...response?.data]);
        }
      }

      setTotalPages(response?.totalPages);

      setDataStatus((prev) => ({
        ...prev,
        isData: true,
      }));
    } catch (error) {
      console.error("Error fetching landing page list:", error);
      setDataStatus((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
      }));
    } finally {
      setDataStatus((prev) => ({
        ...prev,
        isLoading: false,
        isError: false,
      }));
    }
  };

  const fetchPageDetails = async ({ templateName }) => {
    try {
      const response = await getLandingPageDetailsQuery({
        input: { templateName },
      });
      setDataStatus((prev) => ({
        ...prev,
        isLoading: true,
      }));
      setPageDetails(response?.data);
    } catch (error) {
      console.error("Error fetching landing page list:", error);
      setDataStatus((prev) => ({
        ...prev,
        isError: true,
      }));
    } finally {
      setDataStatus((prev) => ({
        ...prev,
        isLoading: false,
        isError: false,
      }));
    }
  };

  useEffect(() => {
    fetchLandingPageList();
  }, [page, category]);

  const onSelectCategory = ({ selectedCategory }) => {
    setCategory(selectedCategory);
    setPage(1);
  };
  const onDeSelectFilter = () => {
    setCategory("");
    setPage(1);
  };
  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <DataContext.Provider
      value={{
        pageList,
        fetchLandingPageList,
        fetchPageDetails,
        dataStatus,
        category,
        onSelectCategory,
        onDeSelectFilter,
        handleLoadMore,
        totalPages,
        page,
        pageDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
