import React from "react";
import Image from "next/image";

import CTA from "@/components/sections/cta";
import Layout from "@/components/layout";

function About() {
  return (
    <Layout>
      <section className="flex flex-wrap md:grid grid-cols-2 w-[90%] gap-20 mx-auto py-20">
        <div className="flex flex-col gap-10 justify-center">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-linear">
            What is Filit?
          </h1>
          <p className="w-[90%] md:w-[70%] text-xl">
            Filit is an automatic micro-investing platform that is
            revolutionizing the Fin-Tech space in India.
            <br /> <br />
            We believe that everyone should have the opportunity to build a
            secure financial future, and our platform is designed to help people
            achieve this goal.
            <br /> <br />
            <span className="text-2xl">
              All of this using just their{" "}
              <span className="font-semibold">spare change.</span>
            </span>
          </p>
        </div>
        <div className="flex justify-center w-full gap-10">
          <div className="flex flex-col w-[40%] justify-center">
            <div className="aspect-[3/5] max-md:w-full rounded-full border-2 border-white  relative overflow-hidden">
              <Image
                src="/images/sample.jpg"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 w-[40%]">
            <div className="aspect-square max-md:w-full rounded-full border-2 border-white  relative overflow-hidden">
              <Image
                src="/images/sample.jpg"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="aspect-[3/5] max-md:w-full rounded-full border-2 border-white  relative overflow-hidden">
              <Image
                src="/images/sample.jpg"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-[80%] w-[90%] mx-auto flex flex-col gap-20">
        <div className="flex flex-col md:grid grid-cols-2 gap-20">
          <div className="w-[90%] aspect-square max-w-[500px] relative rounded-xl overflow-hidden mx-auto">
            <Image
              src="/images/sample.jpg"
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-linear">
              How it works?
            </h1>
            <p className="w-[90%] md:w-[70%] text-xl">
              Imagine you GPay Rs. 18 to buy a cigarette. <br />
              <br /> Filit makes a note of the amount and rounds it off to the
              nearest 10, i.e. Rs. 20. Then, Filit invests the difference i.e Rs
              2, into the best Mutual Funds, to give you inflation-beating
              returns. Simple and effortless. <br />
              <br />
              <span className="text-2xl">
                We help you grow your wealth, with{" "}
                <span className="font-semibold">
                  every transaction you make
                </span>
                .
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-linear">
              Our Mission
            </h1>
            <p className="w-[90%] md:w-[70%] text-xl">
              In addition to providing a user-centric investing platform, Filit
              is on the mission of creating a financially literate India. We
              provide our users with resources that&apos;ll help them make
              better decisions with their money.
              <br />
              Overall, Filit is a game-changer in the investment space in India.
              <br />
              <br />
              <span className="text-2xl">
                By making investing easy, accessible, and automatic, we are
                empowering people across the country to take control of their
                financial future and{" "}
                <span className="font-semibold">
                  build the wealth they deserve
                </span>
                .
              </span>
            </p>
          </div>
          <div className="w-[90%] aspect-square max-w-[500px] relative rounded-xl overflow-hidden mx-auto">
            <Image
              src="/images/sample.jpg"
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}

export default About;
