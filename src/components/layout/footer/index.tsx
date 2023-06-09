import React from "react";

import Footer__section from "@/components/atoms/footer__section";

const Footer = () => {
  const items1 = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/",
    },
    {
      title: "Contact Us",
      href: "/",
    },
    {
      title: "FAQ",
      href: "/",
    },
  ];
  const items2 = [
    {
      title: "Twitter",
      href: "/",
    },
    {
      title: "Instagram",
      href: "/",
    },
    {
      title: "Facebook",
      href: "/",
    },
  ];
  const items3 = [
    {
      title: "Terms of Use",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
    {
      title: "Legal Notice",
      href: "/",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center mt-auto">
      <div className="md:flex grid grid-cols-1 gap-20 justify-between w-[70%] m-20">
        <div className="flex flex-col gap-3">
          <img src="/logos/footer.svg" alt="" className="w-[200px]" />
          <p className="text-[14px] opacity-[0.7]">
            Got questions? Reach us at <br />
            hey@email.com
          </p>
        </div>
        <div className="flex flex-wrap text-[16px] gap-20 text-[#FFFFFFb3]">
          <Footer__section heading="HOME" items={items1} />
          <Footer__section heading="SOCIAL" items={items2} />
          <Footer__section heading="LEGAL" items={items3} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
