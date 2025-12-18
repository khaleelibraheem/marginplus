"use client";

import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { ThankYouModal } from "@/components/ThankYouModal";
import { InputField } from "./InputField";

export const metadata = {
  title: " Raise Funds for Your Agribusiness ",
  description: " Need funding for your agribusiness? Partner with Marginplus to access capital, support, and market access. Fast onboarding, real investors.",
};

const referrals = [
  { name: "Facebook", referralCode: "fb" },
  { name: "Instagram", referralCode: "ins" },
  { name: "Twitter", referralCode: "x" },
  { name: "Linkedin", referralCode: "lnd" },
  { name: "Whatsapp", referralCode: "wa" },
  { name: "Tiktok", referralCode: "tk" },
];

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function NewWaitList() {
  const [loading, setLoading] = useState(false);
  const [referral, setReferral] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const platform = "web";
      const channel = referral?.name || "";

      console.log({ ...values, channel, platform });

      setLoading(true);
      try {
        await axios.post(`${BASE_URL}/auth/marginplus-waitlist`, {
          ...values,
          channel: channel || "",
          platform: platform || "",
        });
        openModal();
        resetForm();
      } catch (err) {
        console.log("--error=>", err);
        toast.error("Oops! Something went wrong!", {
          autoClose: 20000,
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    const isIOS = () =>
      // @ts-ignore
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const params = new URLSearchParams(window.location.search);
    const referralCode = params.get("r");
    if (referralCode) {
      const foundReferral = referrals.find((ref) => ref.referralCode === referralCode);
      if (foundReferral) setReferral(foundReferral);
    }

    if (!isIOS()) return;
  }, []);

  return (
    <>
      <section className="bg-white overflow-hidden overflow-y-auto w-full relative h-screen flex flex-col md:justify-center pt-20 md:pt-0 bg-[url('/images/marginplus-waitlist-mobile-bg.png')] md:bg-[url('/images/marginplus-waitlist-bg.png')] bg-cover bg-center mt-20">
        <div className="container mx-auto px-5">
          <section className="w-full flex justify-center mb-[30px] lg:mb-[40px]">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={140} height={33} quality={100} priority className="w-[140px] lg:w-[140px] block" />
            </Link>
          </section>

          <h3 className="text-[30px] md:text-[40px] lg:text-[50px] mb-3 text-black leading-[1.3] text-center font-bold">Join Marginplus Today</h3>
          <p className="mb-10 md:mb-20 mx-auto w-[95%] md:w-[60%] lg:w-[45%] text-[19px] md:text-[18px] lg:text-[17px] text-[#919191] leading-[1.4] text-center font-gilroy font-medium">
            Be part of the platform redefining investments for Africa&apos;s future.
          </p>

          <form onSubmit={formik.handleSubmit} className="md:w-[392px] mx-auto">
            <InputField
              label=""
              placeholder="Full Name"
              name="firstName"
              prefixIcon="/images/user-icon.png"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
              error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}
              required
            />

            <InputField
              error={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
              label=""
              placeholder="Email Address"
              name="email"
              prefixIcon="/images/email-icon.png"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
              // error={
              //   formik.touched.email && formik.errors.email
              //     ? formik.errors.email
              //     : ""
              // }
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer primary-btn border-[transparent] px-[20px] text-[16px] rounded-[12px] leading-[1em] h-[50px] font-bold text-white mt-2 mb-5 md:mb-10 flex items-center gap-2 justify-center"
            >
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <span>Join Our Waitlist Now</span>
                  <Image src="/images/arrow-right.png" alt="Arrow Right" width={18} height={18} />
                </>
              )}
            </button>
          </form>

          <p className="mx-auto w-[95%] md:w-[30%] text-[16px] md:text-[14px] lg:text-[14px] text-[#919191] leading-[1.5] text-center font-gilroy font-regular italic">
            Secure early access to opportunities that create lasting impact.
          </p>
        </div>
      </section>

      <ThankYouModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
