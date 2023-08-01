import React from "react";
import Image from "next/image";

import CTA from "@/components/sections/cta";
import Layout from "@/components/layout";
import TeamMember from "@/components/atoms/team";

function About() {
  const team = [
    {
      image: "/images/Charwak.png",
      name: "Charwak Doulani",
      designation: "Founder & CEO"
    },
    {
      image: "/images/Saurabh.png",
      name: "Saurabh Singh",
      designation: "Creative Director"
    },
    {
      image: "/images/Mazahar.png",
      name: "Md. Mazahar Pasha Lathi",
      designation: "Lead Designer"
    },
    {
      image: "/images/Advit.png",
      name: "Advit Mahale",
      designation: "Founder's Office"
    },
    {
      image: "/images/Gaurav.png",
      name: "Gaurav Kabra",
      designation: "Technical Lead"
    },
    {
      image: "/images/Madhav.png",
      name: "Madhav Sona",
      designation: "Marketing & Product Head"
    },
  ]
  return (
    <Layout>
      <section className="flex flex-wrap lg:grid grid-cols-2 w-[90%] gap-20 mx-auto py-20">
        <div className="flex flex-col gap-10 justify-center">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-linear">
            What is Filit?
          </h1>
          <p className="w-[90%] md:w-[70%] text-lg">
            Solutions are born when we face the monster called &rdquo;problem&rdquo;. For
            us, that monster was the lack of money. We have faced hardships in
            life when a major health crisis strikes, or when children&quot;s
            education becomes unaffordable, or even when buying a house appears
            to be a far-fetched dream. We couldn&quot;t anticipate the uncertainties
            of life or understand the way inflation is affecting us, leading us
            to fall into the ugly pit of struggle. In this pit, we met many
            people who were also going through the same thing. Our pain tied us
            together and when we came out, we realized one thing - we don&quot;t want
            to be there again.
            <br />
            <br />
            Through interactions with people who build masterful finance, we
            realized that the mother of all our problems was our unconscious
            spending - money that we don&apos;t pay attention to. As we
            documented our spending habits, we became aware of all this
            unnecessary spending that was growing into a life-threatening issue.
            <br />
            <br />
            We discovered that the antidote that would save our lives was not
            financial knowledge, but rather building intentional financial
            behavior that works.
            <br />
            <br />
            So we founded Filit to help Indians build healthy financial habits -
            no get-rich-quick schemes, no &rdquo;21 din mei paisa double,&rdquo; just the
            habit of saving daily. Consistently making choices to save money and
            invest is the only realistic path to wealth creation for everyone.
            By cutting off bad habits that lead to disastrous financial
            situations and building good habits that lead to a glorious
            financial life.
            <br />
            <br />
            We believe the compound effect of forming good financial habits will
            usher people towards wealth creation and a better quality of life.
            <br />
            <br />
            <span className="text-2xl">
              All of this using just their{" "}
              <span className="font-semibold">spare change.</span>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center w-full gap-10">
          <div className="flex flex-col w-[40%] justify-center">
            <div className="aspect-[3/5] max-md:w-full rounded-full  relative overflow-hidden">
              <Image
                src="/images/Saurabh.png"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 w-[40%]">
            <div className="aspect-square max-md:w-full rounded-full  relative overflow-hidden">
              <Image
                src="/images/Charwak.png"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="aspect-[3/5] max-md:w-full rounded-full  relative overflow-hidden">
              <Image
                src="/images/Madhav.png"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="md:w-[80%] w-[90%] mx-auto flex flex-col gap-20">
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
      </section> */}
      <section className="my-20">
        <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-linear">
          Our Team
        </h1>
        <div className="flex w-[90%] my-10 max-w-7xl flex-wrap mx-auto gap-20 justify-evenly">
          {team.map((item, index) => {
            return (
              <TeamMember name={item.name} image={item.image} designation={item.designation} key={index}/>
            )
          })}
        </div>
      </section>
      <CTA />
    </Layout>
  );
}

export default About;
