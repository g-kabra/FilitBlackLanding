"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/button";

const Header = () => {
  return (
    <nav className="sticky top-0 w-full flex justify-center z-10 h-[10vh]">
      <div className="bg-[#212121cc] rounded-full px-5 py-2 my-auto text-[#81859F] border border-[#FFFFFF1a] h-min flex gap-20 backdrop-blur">
        <Link href={"/"}><img src="/logos/navbar.svg" alt="" /></Link>
        <div className="flex items-center gap-10 max-md:hidden">
          <Link href="/about">About</Link>
          <Link href="/blogs">Blog</Link>
          <p
            className="cursor-pointer"
            onClick={() => {
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            document
              .getElementById("cta")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Header;
