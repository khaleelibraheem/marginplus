"use client";

import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

import { jobs } from "@/utils/data";

export default function JoinOurTeam() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamFilter, setTeamFilter] = useState("All Teams");
  const [sortBy, setSortBy] = useState("Newest");

  const teams = [
    "All Teams",
    "Engineering",
    "Product",
    "Operations",
    "Design",
    "Finance",
    "Compliance",
  ];
  const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesTeam = teamFilter === "All Teams" || job.team === teamFilter;
      return matchesSearch && matchesTeam;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return b.datePosted - a.datePosted;
        case "Oldest":
          return a.datePosted - b.datePosted;
        case "A-Z":
          return a.title.localeCompare(b.title);
        case "Z-A":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [searchTerm, teamFilter, sortBy]);

  const CustomSelect = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full py-2 text-sm text-[#06060678]"
        >
          <span className="truncate">{value || placeholder}</span>
          <ChevronDown
            className={`w-[24px] h-[24px] ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Helper to create a slug from the job title
  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <section className="mt-20 max-w-[812.5px] mx-auto px-4">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[812px] mx-auto flex flex-col items-center">
        <h2 className="text-center text-[#004D2E] font-bold text-[21px] sm:text-[26px] opacity-80">
          Join our team
        </h2>
      </div>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 max-w-[448px] mx-auto mt-5">
          {/* Search Input */}
          <div className="flex items-center relative w-[191px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#06060678] w-[24px] h-[24px]" />
            <input
              type="text"
              placeholder="Job title or key words"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-2 py-2 text-[#06060678] focus:outline-none text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-4 justify-center">
            {/* Team Filter */}
            <div className="w-[115px]">
              <CustomSelect
                value={teamFilter}
                onChange={setTeamFilter}
                options={teams}
                placeholder="All Teams"
              />
            </div>

            {/* Sort Options */}
            <div className="w-[102px]">
              <CustomSelect
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
                placeholder="Newest"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-5">
        {filteredAndSortedJobs.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center text-gray-500">
            <p>No jobs found matching your criteria.</p>
          </div>
        ) : (
          filteredAndSortedJobs.map((job, index) => (
            <Link
              key={index}
              href={`/careers/${slugify(job.title)}`}
              className="block"
            >
              <div className="bg-white rounded-[16px] border border-[#0000001A] cursor-pointer">
                <div className="p-5 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold mb-2 truncate">
                      {job.title}
                    </h3>
                    <div className="flex flex-row items-center gap-3 text-sm">
                      <span>{job.location}</span>
                      <span className="inline w-[5px] h-[5px] rounded-[70px] bg-[#008647]"></span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      {/* Results Count */}
      {filteredAndSortedJobs.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-500">
          Showing {filteredAndSortedJobs.length} of {jobs.length} positions
        </div>
      )}
    </section>
  );
}
