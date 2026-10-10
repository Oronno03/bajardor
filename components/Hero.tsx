import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Hero = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='flex flex-col sm:flex-row bg-white justify-center max-sm:text-center sm:justify-between items-center sm:px-12 py-5 rounded-lg'>
            <div className='max-w-[50%] flex max-sm:items-center flex-col gap-4'>
                <div className='flex flex-col gap-2 max-sm:items-center'>
                    <p className='text-primary text-[14px] bg-primary/10 w-max px-3 py-1 rounded-[14px]'>{date}</p>
                    <h1 className='font-bold text-[36px]'>আজকের বাজারের দাম এক নজরে</h1>
                </div>
                <p className='text-base-content/70 text-[16px]'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <Link href={"#সব-পণ্য"} className='bg-primary border border-solid border-primary-strong text-white px-4 py-2.5 rounded-lg w-max'>সব পণ্য দেখুন</Link>
            </div>
            <Image src={"/bazar-hero.png"} alt='hero-logo' className='w-[315px] h-[263px]' height={315} width={315} />
        </div>
    </div>
  )
}

export default Hero