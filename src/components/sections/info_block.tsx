import React from "react";

import WhiteCard from "../helpers/white_card";
import InfoBlock__Feature from "../atoms/infoblock__feature";

const InfoBlock = () => {
  const features = [
    "Get trusted purity of BIS/NABL Hallmark",
    "Keep your gold secured in safety vaults",
    "Insured physical delivery of your gold anytime, anywhere",
    "Withdraw directly into your bank account",
  ];
  return (
    <WhiteCard>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[80%] mx-auto">
        <div className="flex flex-col justify-center lg:max-w-[70%] max-w-[90%] my-10">
          <div className="flex flex-col mb-10">
            <p className="text-[1.25rem] md:text-[20px] text-[#00000080]">
              Plus
            </p>
            <h1 className="text-[3rem] md:text-[50px] font-bold mb-5">
              Gold savings is on Z-plus security
            </h1>
            <p className="md:text-[24px] text-[1.25rem] text-[#000000b3]">
              You can count on Filit: Keeping your gold savings secure, your
              mind at ease
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-[22px] text-[1.5rem] font-semibold text-[#000000b3] mb-3">
              That&apos;s why we
            </h1>
            <div className="flex flex-wrap gap-10">
              {features.map((feature, index) => {
                return (
                  <InfoBlock__Feature key={index}>{feature}</InfoBlock__Feature>
                );
              })}
            </div>
          </div>
        </div>
        <img src="/images/Info__Phone.png" alt="" className="ml-auto mt-auto" />
      </div>
    </WhiteCard>
  );
};

export default InfoBlock;
