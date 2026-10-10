"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries()) as {
    name: string;
    email: string;
    password: string;
    confirm: string;
  };

  if (!data.name || !data.email || !data.password || !data.confirm) {
    toast.error("অনুগ্রহ পূর্বক পুরো ফর্মটি পূরণ করুন");
    return;
  }

  if (data.password !== data.confirm) {
    toast.error("আপনার পাসওয়ার্ড দুটি একই হতে হবে!");
    return;
  }

  await authClient.signUp.email(
    {
      email: data.email,
      name: data.name,
      password: data.password,
    },
    {
      onRequest: () => {
        toast.info("একাউন্ট তৈরি হচ্ছে");
      },
      onSuccess: () => {
        toast.success("একাউন্ট সফলভাবে তৈরি হয়েছে");
        navigation.navigate("/");
      },
      onError: (ctx) => {
        if (ctx.error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
          toast.error("একাউন্ট ইতিমধ্যে রয়েছে। অনুগ্রহ পূর্বক সাইন ইন করুন!");
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
        toast.info("সাইন আপ হচ্ছে");
      },
      onSuccess: () => {
        toast.success("আপনি সফলভাবে গুগল দিয়ে সাইন আপ করেছেন!");
      },
      onError: () => {
        toast.error("সাইন আপ সফল হয়নি");
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
        toast.info("সাইন আপ হচ্ছে");
      },
      onSuccess: () => {
        toast.success("আপনি সফলভাবে গিটহাব দিয়ে সাইন আপ করেছেন!");
      },
      onError: () => {
        toast.error("সাইন আপ সফল হয়নি");
      },
    },
  );
};

const SignUpPage = () => {
  return (
    <div className="w-full my-10 flex flex-col items-center justify-center gap-7">
      <div className="text-center">
        <h1 className="font-bold text-[20px]">অ্যাকাউন্ট তৈরি করুন</h1>
        <p className="font-medium text-[14px] text-base-content">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg flex flex-col gap-4 max-w-screen">
        <form
          action="submit"
          className="bg-white rounded-lg flex flex-col gap-4 sm:min-w-120"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-base-content">নাম</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="যেমনঃ রহিম উদ্দিন"
              className="w-full border border-solid border-base-300 text-base-content px-2 py-1 rounded-md"
            />
          </div>
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
          <div className="flex flex-col gap-2">
            <p>পাসওয়ার্ড নিশ্চিত করুন</p>
            <input
              type="password"
              name="confirm"
              id="confirm"
              minLength={8}
              placeholder="আবার লিখুন"
              className="w-full border border-solid border-base-300 text-base-content px-2 py-1 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full text-center bg-primary text-white py-2 rounded-md shadow-btn cursor-pointer"
          >
            একাউন্ট তৈরি করুন
          </button>
        </form>
        <div className="flex justify-between items-center gap-5">
          <div className="h-0.5 bg-base-content/10 w-full"></div>
          <p className="text-base-content text-[14px]">অথবা</p>
          <div className="h-0.5 bg-base-content/10 w-full"></div>
        </div>
        <div className="flex max-md:flex-col justify-between items-center gap-2">
          <button onClick={handleGoogleSignIn} className="w-full cursor-pointer flex justify-center items-center px-4 py-2.5 gap-2.5 border border-solid border-base-300 rounded-lg font-bold text-[15px]">
            <FcGoogle /> Google দিয়ে চালিয়ে যান
          </button>
          <button onClick={handleGithubSignIn} className="w-full justify-center cursor-pointer flex items-center px-4 py-2.5 gap-2.5 border border-solid border-base-300 rounded-lg font-bold text-[15px]">
            <FaGithub /> Github দিয়ে চালিয়ে যান
          </button>
        </div>
        <p className="text-center text-[14px]">
          অ্যাকাউন্ট আছে?{" "}
          <Link href={"/sign-in"} className="text-primary">
            সাইন ইন করুন
          </Link>
        </p>
      </div>
      <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
    </div>
  );
};

export default SignUpPage;
