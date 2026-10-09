import Image from "next/image";
import Link from "next/link";
import React from "react";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Navlogo = () => {
  return (
    <Link href={"/"} className="flex gap-2">
      <Image src={"/nav-logo.png"} alt="logo icon" height={40} width={40} />
      <div>
        <h1 className="text-[20px] font-bold">বাজার দর</h1>
        <p className="text-[12px]">{date}</p>
      </div>
    </Link>
  );
};

export default Navlogo;
