"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@sanity/client";
import { groq } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

import getDate from "@/utils/dateFormatter";

import BlogCard from "@/components/atoms/blogcard";
import CTA from "@/components/sections/cta";
import Layout from "@/components/layout";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});
const builder = ImageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

function Blog() {
  const [blogs, setBlogs] = React.useState<any[]>([]);
  const [titles, setTitles] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [lastPublishedAt, setLastPublishedAt] = React.useState<Date>(
    new Date("2100-01-01")
  );
  const [lastId, setLastId] = React.useState<string>("");

  async function getBlogs() {
    const result = await sanityClient.fetch(
      groq`
    *[_type == "post" && (
      publishedAt < $lastPublishedAt
      || (publishedAt == $lastPublishedAt && _id > $lastId)
    )] | order(publishedAt desc) [0...9] {
      _id,
      title,
      subtitle,
      slug,
      read_time,
      mainImage,
      publishedAt,
      author->
    }
  `,
      { lastPublishedAt, lastId }
    );
    console.log(result, lastPublishedAt, lastId);
    if (result.length > 0) {
      setLastPublishedAt(result[result.length - 1].publishedAt);
      setLastId(result[result.length - 1]._id);
      console.log(
        result[result.length - 1]._id,
        result[result.length - 1].publishedAt
      );
    } else {
      setLastId(""); // Reached the end
    }
    return result;
  }

  function getTitles() {
    const result = sanityClient.fetch(
      groq`
    *[_type == "post"] {
      _id,
      title,
      subtitle,
      slug,
      read_time,
      publishedAt,
    }
  `
    );
    return result;
  }

  React.useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
    getTitles().then((titles) => setTitles(titles));
    if (window !== undefined) {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setCollapsed(true);
        } else {
          setCollapsed(false);
        }
      });
    }
  }, []);
  return (
    <Layout>
      <div className="bg-clip-text bg-gradient-linear flex flex-col px-5 py-32">
        <h1 className="text-7xl font-bold text-center text-transparent">
          Become Financially Literate
        </h1>
      </div>
      <div className="grow grid grid-cols-3 gap-10 w-[90%] mx-auto max-md:flex max-md:flex-col-reverse">
        {blogs.length == 0 && (
          <>
            <Image
              src="/icons/loader.svg"
              height={40}
              width={40}
              alt=""
              style={{ color: "white" }}
              className="mx-auto col-span-3"
            />
          </>
        )}
        {blogs.length > 0 && (
          <>
            {/* Blog Cards */}
            <div className="col-span-2 flex flex-col gap-5 items-center">
              <div className="flex flex-wrap max-md:justify-center w-full gap-10">
                {blogs.map(
                  (blog: {
                    mainImage?: any;
                    publishedAt?: string;
                    read_time?: number;
                    title?: string;
                    subtitle?: string;
                    slug?: any;
                  }) => {
                    return (
                      <BlogCard
                        image={urlFor(blog?.mainImage).url()}
                        date={getDate(
                          new Date(blog?.publishedAt || "2023-01-01")
                        )}
                        readtime={blog?.read_time}
                        title={blog?.title}
                        subtitle={blog?.subtitle}
                        slug={blog?.slug.current}
                        key={blog?.slug.current}
                      ></BlogCard>
                    );
                  }
                )}
              </div>
              {lastId !== "" && (
                <p
                  className="underline cursor-pointer opacity-50 hover:opacity-100 transition-all"
                  onClick={() => {
                    getBlogs().then((newBlogs) =>
                      setBlogs([...blogs, ...newBlogs])
                    );
                  }}
                >
                  View More
                </p>
              )}
            </div>
            {/* Blog Search */}
            <div className="flex flex-col gap-5 max-md:w-[90%] max-md:mx-auto">
              <input
                type="text"
                className="bg-[#212121] rounded-full px-5 py-3"
                placeholder="Search posts"
                onChange={(e) => setSearch(e.target.value)}
              />
              {(!collapsed || search !== "") && (
                <div className="rounded-xl max-h-[80vh] overflow-scroll  w-[90%] mx-auto border border-[#464646] bg-[#161B22] p-5 flex flex-col gap-5">
                  {titles.slice(0, 10).map(
                    (
                      blog: {
                        publishedAt?: string;
                        read_time?: number;
                        title?: string;
                        subtitle?: string;
                        slug?: any;
                      },
                      index
                    ) => {
                      return blog?.title
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                        blog?.subtitle
                          ?.toLowerCase()
                          .includes(search.toLowerCase()) ? (
                        <>
                          <Link
                            href={`/blogs/${blog?.slug.current}`}
                            className="flex flex-col gap-3"
                            key={blog?.slug.current}
                          >
                            <h1 className="text-xl font-semibold">
                              {blog?.title}: {blog?.subtitle}
                            </h1>
                            <p className="opacity-[0.7]">
                              {getDate(
                                new Date(blog?.publishedAt || "2023-01-01")
                              )}{" "}
                              | {blog?.read_time} mins
                            </p>
                          </Link>
                          {index !== titles.length - 1 && <hr className="opacity-30"/>}
                        </>
                      ) : null;
                    }
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <CTA />
    </Layout>
  );
}

export default Blog;
