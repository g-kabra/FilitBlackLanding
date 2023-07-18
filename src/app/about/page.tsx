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
            Meow
          </h1>
          <p className="w-[90%] md:w-[70%]">
            emember, you must be able to make good on that promise, soLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has beenemember, you must be able to make good on that
            promise, soLorem Ipsum is simply dummy text o
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
              Meow
            </h1>
            <p className="w-[90%] md:w-[70%]">
              emember, you must be able to make good on that promise, soLorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has beenemember, you must be able to make
              good on that promise, soLorem Ipsum is simply dummy text o
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-linear">
              Meow
            </h1>
            <p className="w-[90%] md:w-[70%]">
              emember, you must be able to make good on that promise, soLorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has beenemember, you must be able to make
              good on that promise, soLorem Ipsum is simply dummy text o
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
