"use client";

import { useMessageModal } from "@/context";
import { useFormik } from "formik";
import { useState } from "react";
import { FormsService } from "@/services";
import { CreateWaitListSchema } from "@/utils/schemas";
import { InputField } from "../InputField";
import { celebrate, celebrate2 } from "@/utils";

export const GetInTouchSection = () => {
  const [loading, setLoading] = useState(false);
  const { showMessageModal } = useMessageModal();

  const formik = useFormik({
    initialValues: { firstName: "", email: "" },
    validationSchema: CreateWaitListSchema,
    onSubmit: (values) => {
      joinCommunity(values);
    },
  });

  const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue } = formik;

  const joinCommunity = async (values) => {
    setLoading(true);
    try {
      const { firstName, email } = values;

      const payloadData = {
        firstName,
        lastName: "",
        phone: "",
        state: "",
        country: "",
        formSource: "#JoinCommunity",
      };

      const { data, error } = await FormsService.createWaitList(payloadData);

      if (!data) {
        throw new Error(error?.message);
      }

      // Format the name nicely
      const name = firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1).toLowerCase();

      // Celebrate visually
      celebrate();
      celebrate2(); // if you have a second confetti variation

      // reset form
      formik.resetForm();

      // Show an exciting success message
      setTimeout(() => {
        showMessageModal("success", `Thanks for joining, ${name}! 🎉`, "Get ready for exciting updates and insider access to our community.", {
          confirmText: "Dismiss",
        });
      }, 300);
    } catch (err) {
      showMessageModal("error", "Oops! Something went wrong.", "We couldn't add you to the list. Please try again later.", { confirmText: "Close" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-[1200px] pt-20 px-5">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full rounded-[18px] bg-[#F6F6F6] px-4 md:px-10 py-15 md:py-15">
        <header className="text-left w-full md:w-[50%]">
          <h3 className="text-[40px] md:text-[40px] font-bold mb-4  md:text-left">Get in touch</h3>
          <p className="text-[18px] md:text-[18px] font-medium text-gray-700  md:text-left">Have a question, want to collaborate, or want to learn more? We’d love to hear from you.</p>
        </header>

        <div className=" w-full md:w-[50%]">
          {/* Full Name */}
          <InputField
            label="Full Name"
            name="firstName"
            placeholder="Enter name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={loading}
            error={touched.firstName && errors.firstName ? errors.firstName : ""}
            outerCon="mb-4"
            containerClassName="bg-white !border !border-gray-200"
          />

          {/* Email */}
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : ""}
            disabled={loading}
            containerClassName="bg-white !border !border-gray-200"
          />
          {/* Submit Button */}
          <button
            disabled={loading || !values?.firstName || !values?.email}
            onClick={() => handleSubmit()}
            className="w-full h-[46px] py-[16px] rounded-lg bg-[#FFBF1B] text-[#1a1a1a] font-bold text-[14px] hover:bg-[#e5aa18] transition-colors shadow-md cursor-pointer flex justify-center items-center"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </div>
      </div>
    </section>
  );
};
