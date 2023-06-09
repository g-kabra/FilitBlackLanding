import Link from "next/link";
import React from "react";

interface item {
  href: string;
  title: string;
}

const Footer__section = ({
  heading,
  items,
}: {
  heading: string;
  items: item[];
}) => {
  return (
    <div className="flex gap-2 flex-col">
      <h1 className="pb-5 text-semibold text-[#FFFFFF] text-[20px]">{heading}</h1>
      {items.map((item, index) => {
        return <Link href={item.href}>{item.title}</Link>;
      })}
    </div>
  );
};

export default Footer__section;
