import Link from 'next/link'

const NotLoggedIn = () => {
  return (
    <div className='flex gap-3 items-center'>
        <Link href={"/sign-in"} className='font-semibold px-4 py-2.5 text-[14px]'>সাইন ইন</Link>
        <Link href={"/sign-up"} className='font-semibold border bg-primary border-solid border-primary-2 shadow-[0_4px_3px_#05893E4D,0_3px_2px_#05893E4D,inset_0_0.5px_0_#FFF] text-white px-4 py-2.5 text-[14px] rounded-lg'>সাইন আপ</Link>
    </div>
  )
}

export default NotLoggedIn