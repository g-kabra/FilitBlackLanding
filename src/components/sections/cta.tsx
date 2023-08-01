import React from "react";

import WhiteCard from "../helpers/white_card";
import EmailField from "../atoms/email_field";

function CTA() {
  return (
    <WhiteCard id={"cta"}>
      <div className="flex flex-col mx-auto items-center gap-10 py-40 max-w-[90%]">
        <h1 className="text-6xl max-md:text-[50px] font-bold text-center font-manrope">
          Join waitlist for early access
        </h1>
        <p className="max-w-[90%] md:max-w-[40%] text-center mx-auto">It&apos;s never too late to get onboard. Enter your email now to join in to the financial revolution and make your money work for <span className="font-semibold">you.</span></p>
        <div className="md:w-[30%] w-full md:min-w-[500px]">
            <EmailField variant="secondary"/>
        </div>
      </div>
    </WhiteCard>
  );
}

export default CTA;
