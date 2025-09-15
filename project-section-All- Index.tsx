"use client";
import ProjectCard from "@/components/Cards/Project/ProjectCard";
import EnquiryForm from "@/components/EnquiryForm";
import Pagination from "@/components/Pagination/Pagination";
import { allProjectData } from "@/constants/ProjectsConstant/AllProjectsConstant/AllData";
import Image from "next/image";
import React, { useState } from "react";

const All = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState("All Projects");
  const [filteredData, setFilteredData] = useState(allProjectData);
  const [loading, setLoading] = useState(false);

  const filters = ["All Projects", "commercial", "residence"];

  const handleFilterChange = (filter: string) => {
    setActive(filter);
    setLoading(true);
    setFilteredData([]); // Clear data during loading
    setCurrentPage(1); // Optional: reset to first page

    setTimeout(() => {
      const result =
        filter === "All Projects"
          ? allProjectData
          : allProjectData.filter((item) => item.category === filter);
      setFilteredData(result);
      setLoading(false);
    }, 3000); // 3 second delay
  };

  return (
    <div className="py-2">
      <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl shadow-inner w-fit">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-200 border 
            ${
              active === filter
                ? "bg-purple-600 text-white border-purple-600 shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 py-2">
        <div className="projects max-h-660px pb-2 overflow-y-auto">
          <div className="allProjectData flex flex-col gap-2 lg:p-7">
            {loading ? (
              <div className="spinner">
                <div className="flex justify-center items-center py-10">
                  <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h1 className="text-center text-2xl bg-gradient-to-tr from-[yellow] via-[purple] to-[red] bg-clip-text text-transparent font-extrabold">
                  Please Wait....
                </h1>
              </div>
            ) : filteredData.length === 0 ? (
              <div className="text-center text-gray-500 font-medium py-6">
                Project not found.
              </div>
            ) : (
              filteredData.map((item, idx) => (
                <ProjectCard key={idx} {...item} />
              ))
            )}
          </div>

          {!loading && filteredData.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={10} // Static for now
              onPageChange={(page) => {
                setLoading(true);
                setTimeout(() => {
                  setCurrentPage(page);
                  setLoading(false);
                }, 3000); // Show spinner for 3 seconds
              }}
            />
          )}
        </div>

        <div className="contact-card flex flex-col gap-4 py-2">
          <div className="brokeraze-img h-80">
            <Image
              src="/zero-brokaraze-img.jpg"
              height={500}
              width={700}
              alt="0% brokarage image"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="enquiry-form">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
