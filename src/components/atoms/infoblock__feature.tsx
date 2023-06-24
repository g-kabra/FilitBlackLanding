import React from "react";


const InfoBlock__Feature = ({ children }: { children: string }) => {
  
  return (
    <div className="md:w-[40%] w-[90%]">
      <hr className="mb-2 h-[1px]" />
      <p className="text-[#000000b3] text-lg">{children}</p>
    </div>
  );
};

export default InfoBlock__Feature;
