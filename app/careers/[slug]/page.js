"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { jobs } from "@/utils/data";
import { notFound } from "next/navigation";
import { Briefcase, CheckCircle, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import AppDownloadSection from "@/components/AppDownloadSection";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function JobDetailPage({ params }) {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolio: "",
    resume: null,
  });

  const job = jobs.find((job) => slugify(job.title) === slug);

  if (!job) return notFound();

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
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Application submitted for ${job.title}!\n\nDetails:\nName: ${
        formData.fullName
      }\nEmail: ${formData.email}\nPortfolio: ${formData.portfolio}\nResume: ${
        formData.resume ? formData.resume.name : "No file selected"
      }`
    );
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <main className="">
      {/* Header Section */}
      <div className="bg-[#00A85947] pt-32 pb-16">
        <div className="max-w-[654px] mx-auto px-4">
          <h1 className="text-[24px] md:text-[30px] font-bold text-center text-[#014F2A] mb-6">
            {job.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[17px] md:text-[20px] font-medium text-[#014F2A] shadow-sm">
              <MapPin className="w-4 h-4 mr-2 text-[#014F2A]" />
              {job.location}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[17px] md:text-[20px] font-medium text-[#014F2A] shadow-sm">
              <Briefcase className="w-4 h-4 mr-2 text-[#014F2A]" />
              Work Benefits
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[17px] md:text-[20px] font-medium text-[#014F2A] shadow-sm">
              <Users className="w-4 h-4 mr-2 text-[#014F2A]" />
              {job.type}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[17px] md:text-[20px] font-medium text-[#014F2A] shadow-sm">
              <Clock className="w-4 h-4 mr-2 text-g[#014F2A]" />
              Full Time
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto py-8 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Description - Desktop: Left, Mobile: Top */}
          <div className="lg:col-span-2 px-4">
            <div className="max-h-[809px]">
              <Image
                src={"/images/work.jpg"}
                height={500}
                width={500}
                alt="Job Image"
                priority
                className="w-full h-full rounded-2xl object-cover "
              />
            </div>
          </div>

          {/* Sidebar - Desktop: Right, Mobile: Bottom */}
          <div className="lg:col-span-1 w-[323.5px] sm:w-[293px] mx-auto">
            {/* Job Title and Apply Button */}
            <div className="pt-6 mb-6">
              <h2 className="text-xl font-bold text-[#000000CC] text-center mb-6">
                {job.title}
              </h2>
              <button className="w-full bg-[#008647] text-white font-bold py-3 px-6 rounded-[10.5px]">
                Apply now
              </button>
            </div>

            {/* Work Benefits */}
            <div className="pt-6 mt-2">
              <h3 className="text-[20px] text-center font-bold text-[#000000CC] mb-6">
                Work Benefits
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Image
                      src={"/images/briefcase.svg"}
                      height={20}
                      width={20}
                      alt="Brief Case"
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#014F2A] text-sm font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="flex flex-col sm:flex-row justify-between mt-12 bg-[#B2FF96] sm:rounded-[20px] p-6 md:p-8">
          <div className="max-w-[314px]">
            <h2 className="text-[36px] leading-10 font-bold text-[#014F2A] mb-10">
              Apply for this <br /> role.
            </h2>
            <p className="text-[#014F2A] mb-6 leading-4">
              Send your application and we will get back to you shortly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[761px]">
            <div>
              <label className="block text-[12px] font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold mb-2">
                Portfolio
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="Link to your portfolio or website"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                required
              />
            </div>

            <div className="relative">
                <label className="block text-[12px] font-bold mb-2">Files</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.doc,.docx"
              />
              <div className="w-full p-[13px] rounded-lg bg-white text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors text-sm">
                {formData.files
                  ? formData.files.name
                  : "Click to upload your resume CV and cover letter"}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                onClick={handleSubmit}
                className="w-full bg-[#FFBF1B] text-black font-bold py-4 px-8 rounded-lg text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppDownloadSection />
    </main>
  );
}
