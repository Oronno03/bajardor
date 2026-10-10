"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { CgLogOut } from "react-icons/cg";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return "Loading Data";
  if (!session?.user) return;
  const { user } = session;

  const handleLogout = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("সাইন আউট সফল হয়নি");
    } else {
      toast.success("আপনি সাইন আউট করেছেন");
      navigation.navigate("/");
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fData = new FormData(e.target);
    const data = Object.fromEntries(fData.entries()) as {name: string};

    if(!data.name) {
        toast.error("অনুগ্রহ পূর্বক একটি নাম লেখুন");
        return;
    }

    const {error} = await authClient.updateUser({
        name: data.name
    })
    
    if(error) {
        toast.error("নাম আপডেট সফল হয়নি।")
    } else {
        toast.success("আপনার নাম সফলভাবে আপডেট হয়েছে।")
    }
}

  return (
    <main className="container mx-auto">
      <div className="h-screen w-full flex flex-col gap-8 justify-center max-w-5xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[18px]">আপনার প্রোফাইল</h1>
          <p className="text-base-content text-[14px]">আপনার একাউন্টের তথ্য এখানে দেখুন</p>
        </div>
        <div className="bg-white px-4 py-10 rounded-lg flex justify-between items-center w-full">
          <div className="flex gap-3 items-center">
            {user.image ? (
              <Image
                src={user.image as string}
                height={60}
                width={60}
                alt="User PFP"
                className="rounded-full"
              />
            ) : (
              <div className="bg-primary w-15 h-15 text-[30px] flex items-center justify-center text-white font-bold rounded-full">
                {user.name.charAt(0)}
              </div>
            )}
            <div>
              <h1 className="font-extrabold text-[18px]">{user.name}</h1>
              <p className="font-gray-600 text-[14px]">{user.email}</p>
            </div>
          </div>

          <button
            className="cursor-pointer hover:bg-error hover:text-white transition-all flex gap-2 border-error border border-solid text-error items-center px-4 py-2 rounded-md"
            onClick={handleLogout}
          >
            <CgLogOut /> সাইন আউট
          </button>
        </div>
        <div className="w-full px-4 py-8 bg-white rounded-lg">
          <h1 className="font-extrabold text-[20px]">তথ্য</h1>
          <form action="submit" className="px-4 py-8 flex flex-col gap-4" onSubmit={e => handleSubmit(e)}>
            <p className="text-[14px] text-base-content">নাম</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="যেমনঃ রহিম উদ্দিন"
              className="w-full border border-solid border-base-300 text-base-content px-2 py-1 rounded-md"
            />
            <button
            type="submit"
            className="w-full text-center bg-primary text-white py-2 rounded-md shadow-btn cursor-pointer"
          >
            আপডেট
          </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
