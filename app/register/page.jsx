"use client";
import Image from "next/image";
import imageClose from "../../data/image/close.svg";
import Link from "next/link";
const register = () => {
  return (
    <div className="bg-[#fff] w-[100vw] min-h-[100vh]  flex justify-center items-center">
      <div className="login w-[442px] my-[34px] mx-[64px] flex flex-col">
        <Image src={imageClose} className="mb-[34px] " />
        <span className=" leading-[48px] text-[#7797EE] text-[64px] font-bold">
          Register Now
        </span>
        <div className="mt-[12px] flex flex-col ">
          <span className="leading-[28px] mb-[9px]">Full Name</span>
          <input type="text" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <div className="mt-[12px] flex flex-col ">
          <span className="leading-[28px] mb-[9px]">Mobile No</span>
          <input type="text" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <div className="mt-[12px] flex flex-col ">
          <span className="leading-[28px] mb-[9px]">Email</span>
          <input type="text" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <div className="mt-[12px] flex flex-col ">
          <span className="leading-[26px] mb-[9px]">Password</span>
          <input type="password" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <div className="mt-[12px] flex flex-col ">
          <span className="leading-[26px] mb-[9px]">Confirm Password</span>
          <input type="password" className="h-[66px] bg-[#F0F0F0] rounded-md" />
        </div>
        <button className="mt-[22px] h-[70px] bg-[#4B5A69] text-[20px] font-bold text-[#fff] rounded-md">
          Register Now
        </button>
        <div className="flex justify-center mt-[22px] text-[20px] font-bold">
          <Link href="/login">Login Now</Link>
        </div>
      </div>
    </div>
  );
};

export default register;
