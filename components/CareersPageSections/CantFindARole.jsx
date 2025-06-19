"use client";

import React, { useState } from "react";

const CantFindARole = () => {
  const [formData, setFormData] = useState({
    skills: "",
    email: "",
    portfolio: "",
    files: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      files: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="mt-20 sm:p-4 flex items-center justify-center">
      <div className="w-full max-w-[1018px]">
        {/* Desktop Layout */}
        <div className="hidden lg:block bg-[#B2FF96] rounded-[20px] p-8">
          <div className="flex gap-12">
            {/* Left side - Text content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[#014F2A] mb-10">
                Can't Find a<br />
                suitable role?
                <br />
                Reach out!
              </h1>
              <p className="text-[#014F2A] text-sm">
                Think you can bring magic to the Marginplus
                <br />
                team and can't find a suitable role for you, kindly
                <br />
                fill the form here.
              </p>
            </div>

            {/* Right side - Form */}
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                    Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    placeholder="Tell us what you can do for us"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                  />
                </div>

                <div>
                  <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                  />
                </div>

                <div>
                  <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                    Portfolio
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="Enter a link to your portfolio or website"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                  />
                </div>

                <div>
                  <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                    Files
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="w-full px-4 py-3 rounded-lg bg-white text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors">
                      {formData.files
                        ? formData.files.name
                        : "Click to upload your resume CV/resume and cover letter"}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFBF1B] text-[#000000CC] font-bold text-sm py-3 px-6 rounded-lg mt-6"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden bg-[#B2FF96] p-4">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#014F2A] mb-4">
                Can't Find a<br />
                suitable role?
                <br />
                Reach out!
              </h1>
              <p className="text-[#014F2A] text-sm">
                Think you can bring magic to the Marginplus
                <br />
                team and can't find a suitable role for you, kindly
                <br />
                fill the form here.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                  Skills
                </label>
                <input
                  type="text"
                  name="skills"
                  placeholder="Tell us what you can do for us"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                />
              </div>

              <div>
                <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                />
              </div>

              <div>
                <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                  Portfolio
                </label>
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Enter a link to your portfolio or website"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                />
              </div>

              <div>
                <label className="block text-[#000000CC] font-bold text-[12px] mb-2">
                  Files
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="w-full px-4 py-3 rounded-lg bg-white text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors">
                    {formData.files
                      ? formData.files.name
                      : "Click to upload your resume CV/resume and cover letter"}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFBF1B] text-[#000000CC] text-sm font-bold py-3 px-6 rounded-lg mt-6"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantFindARole;
