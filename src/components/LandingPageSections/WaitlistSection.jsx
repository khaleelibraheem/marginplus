"use client";

import { useMessageModal } from "@/context";
import { FormsService } from "@/services";
import { CreateWaitListSchema } from "@/utils/schemas";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { InputField } from "../InputField";
import { celebrate, celebrate2 } from "@/utils";

export default function WaitlistSection() {
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
    <section className="mt-20 mb-40 px-4 w-full">
      <div className="max-w-[952px] mx-auto">
        <div className="relative w-full rounded-[30px] bg-[#008647] overflow-hidden py-5 px-5 lg:px-[40px]">
          <div className="hidden lg:block absolute -bottom-10 -left-22 z-0 pointer-events-none opacity-80 mix-blend-overlay w-[500px] h-[350px]">
            <Image src="/images/vector.svg" alt="background pattern" fill className="object-contain object-bottom-left" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-white text-[32px] font-bold leading-tight">Join Our Growing Community</h2>
            <p className="text-white mt-4 text-[18px] max-w-[302px] lg:max-w-[693px] leading-5.5 lg:leading-relaxed">
              Be the first to hear about new farmer clusters, markets, insights, and impact reports.
            </p>

            {/* Form */}
            <div className="w-full mt-5 lg:mt-8 flex flex-col gap-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 w-full text-left">
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
                  containerClassName="bg-white"
                  labelClassName="text-white"
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
                  containerClassName="bg-white"
                  labelClassName="text-white"
                />
              </div>

              {/* Submit Button */}
              <button
                disabled={loading || !values?.firstName || !values?.email}
                onClick={() => handleSubmit()}
                className="w-full h-[46px] py-[16px] mt-2 rounded-lg bg-[#FFBF1B] text-[#1a1a1a] font-bold text-[14px] hover:bg-[#e5aa18] transition-colors shadow-md cursor-pointer flex justify-center items-center"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </div>

            <p className="mt-3 lg:mt-10 text-white text-left lg:text-center text-[11px] lg:text-[18px] max-w-[829px]">
              By subscribing, you agree to receive updates from Marginplus and accept our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
