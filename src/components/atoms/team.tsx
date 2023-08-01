import Image from "next/image";
import React from "react";

function TeamMember({
  image,
  name,
  designation,
}: {
  image: string;
  name: string;
  designation: string;
}) {
  return (
    <div className="flex flex-col w-[300px] gap-2 text-center justify-center">
      <div className="aspect-[3/4] max-md:w-full rounded-full relative mb-3 overflow-hidden">
        <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
      </div>
      <p className="font-semibold text-xl">{name}</p>
      <p>{designation}</p>
    </div>
  );
}

export default TeamMember;
