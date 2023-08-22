import React from "react";
import Image from "next/image";
import Link from "next/link";
import getDate from "../../utils/dateFormatter";
import sanityIoImageLoader from "@/utils/sanityLoader";


function BlogCard({
  image,
  date,
  readtime,
  title,
  subtitle,
  slug,
}: {
  image: string;
  date?: string;
  readtime?: number;
  title?: string;
  subtitle?: string;
  slug: string;
}) {
  return (
    <Link href={`/blogs/${slug}`} className="rounded-xl max-w-[500px] w-fit border border-[#464646] bg-[#161B22] p-5 flex flex-col gap-5">
      <div className="w-full aspect-square overflow-hidden rounded-xl relative">
        <Image
          fill
          src={image}
          alt="Blog Photo"
          style={{ objectFit: "cover" }}
          loader={sanityIoImageLoader}
        />
      </div>
      {date && (
        <p className="opacity-[0.7]">
          {date} {readtime ? `| ${readtime} mins` : ""}
        </p>
      )}
      <h1 className="text-xl font-semibold ">
        {title} : {subtitle}
      </h1>
      <p className="group flex gap-2 items-center">
        Read Blog{" "}
        <Image src={"/icons/arrow.svg"} height={15} width={15} alt="" className="group-hover:ml-3 transition-all"/>
      </p>
    </Link>
  );
}

export default BlogCard;
