"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    if (!data.email || !data.password) {
      toast.error("অনুগ্রহ পূর্বক পুরো ফর্মটি পূরণ করুন");
      return;
    }

    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onRequest: () => {
          toast.info("সাইন ইন হচ্ছে");
        },
        onSuccess: () => {
          toast.success("আপনি সফলভাবে সাইন ইন করেছেন!");
          router.push("/");
        },
        onError: (ctx) => {
          if (ctx.error.code === "INVALID_EMAIL_OR_PASSWORD") {
            toast.error("আপনার ইমেইল অথবা পাসওয়ার্ড ভুল");
          } else {
            toast.error(ctx.error.message);
          }
        },
      },
    );
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onRequest: () => {
          toast.info("সাইন ইন হচ্ছে");
        },
        onSuccess: () => {
          toast.success("আপনি সফলভাবে গুগল দিয়ে সাইন ইন করেছেন!");
        },
        onError: () => {
          toast.error("সাইন ইন সফল হয়নি");
        },
      },
    );
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "github",
        callbackURL: "/",
      },
      {
        onRequest: () => {
          toast.info("সাইন ইন হচ্ছে");
        },
        onSuccess: () => {
          toast.success("আপনি সফলভাবে গিটহাব দিয়ে সাইন ইন করেছেন!");
        },
        onError: () => {
          toast.error("সাইন ইন সফল হয়নি");
        },
      },
    );
  };

  return (
    <div className="w-full my-10 flex flex-col items-center justify-center gap-7">
      <div className="text-center">
        <h1 className="font-bold text-[20px]">সাইন ইন</h1>
        <p className="font-medium text-[14px] text-base-content">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg flex flex-col gap-4">
        <form
          action="submit"
          className="bg-white rounded-lg flex flex-col gap-4 sm:min-w-120"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="flex flex-col gap-2">
            <p>ইমেইল</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-solid border-base-300 text-base-content px-2 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>পাসওয়ার্ড</p>
            <input
              type="password"
              name="password"
              id="password"
              minLength={8}
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full border border-solid border-base-300 text-base-content px-2 py-1 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full text-center bg-primary text-white py-2 rounded-md shadow-btn cursor-pointer"
          >
            সাইন ইন
          </button>
        </form>
        <div className="flex justify-between items-center gap-5">
          <div className="h-0.5 bg-base-content/10 w-full"></div>
          <p className="text-base-content text-[14px]">অথবা</p>
          <div className="h-0.5 bg-base-content/10 w-full"></div>
        </div>
        <div className="flex justify-between items-center gap-2 max-md:flex-col">
          <button
            onClick={handleGoogleSignIn}
            className="cursor-pointer flex items-center px-4 py-2.5 gap-2.5 border border-solid border-base-300 rounded-lg font-bold text-[15px]"
          >
            <FcGoogle /> Google দিয়ে চালিয়ে যান
          </button>
          <button
            onClick={handleGithubSignIn}
            className="cursor-pointer flex items-center px-4 py-2.5 gap-2.5 border border-solid border-base-300 rounded-lg font-bold text-[15px]"
          >
            <FaGithub /> Github দিয়ে চালিয়ে যান
          </button>
        </div>
        <p className="text-center text-[14px]">
          অ্যাকাউন্ট নেই?{" "}
          <Link href={"/sign-up"} className="text-primary">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
      <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
    </div>
  );
};

export default SignInPage;
