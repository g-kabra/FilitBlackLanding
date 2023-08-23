"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@sanity/client";
import { groq } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

import PortableTextComponent from "@/utils/portableText";
import getDate from "@/utils/dateFormatter";

import BlogCard from "@/components/atoms/blogcard";
import CTA from "@/components/sections/cta";
import Layout from "@/components/layout";
import sanityIoImageLoader from "@/utils/sanityLoader";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
});
const builder = ImageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}
function getBlog(slug: string) {
  return sanityClient.fetch(groq`
      *[_type == "post" && slug.current == "${slug}"]{
        title,
        subtitle,
        slug,
        read_time,
        mainImage,
        publishedAt,
        author->,
        body
      }
    `);
}

function getBlogs(slug: string) {
  return sanityClient.fetch(groq`
      *[_type == "post" && slug.current != "${slug}"]{
        title,
        subtitle,
        slug,
        read_time,
        mainImage,
        publishedAt,
        author->
      }
    `);
}

function BlogPost({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = React.useState<any>();
  const [blogs, setBlogs] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    getBlog(params.slug).then((blog) => {
      setBlog(blog[0]);
    });
    getBlogs(params.slug).then((blogs) => {
      setBlogs(blogs);
    });

    setLoading(false);
  }, []);
  return (
    <Layout>
      {loading ? (
        <Image
          src="/icons/loader.svg"
          height={40}
          width={40}
          alt=""
          style={{ color: "white" }}
          className="mx-auto col-span-3"
        />
      ) : (
        blog && (
          <div className="my-20 w-[90%] mx-auto">
            <div className="bg-clip-text bg-gradient-linear flex flex-col gap-5 px-5 py-32 max-md:py-16 text-center">
              <h1 className="text-7xl max-md:text-4xl font-bold text-center text-transparent">
                {blog?.title}
              </h1>
              <p className="text-5xl max-md:text-2xl">{blog?.subtitle}</p>
            </div>
            <div className="flex gap-5 flex-wrap mx-auto justify-center">
              <p>{blog?.author.name}</p>
              <p>{getDate(new Date(blog?.publishedAt || "2021-01-01"))}</p>
              <p>{blog?.read_time} min</p>
            </div>
            <div className="w-[90%] aspect-[16/9] max-h-[70vh] rounded-xl mx-auto relative my-10">
              <Image
                src={urlFor(blog?.mainImage).url()}
                fill
                alt={"Blog Cover"}
                style={{ objectFit: "cover" }}
                //@ts-ignore
                loader={sanityIoImageLoader}
              />
            </div>
            <div className="w-[70%] max-md:w-[90%] mx-auto my-10">
              {/* my-5 my-3 text-2xl*/}
              <PortableTextComponent blocks={blog?.body} />
            </div>
          </div>
        )
      )}
      <div className="w-[90%] mx-auto my-16 flex flex-col gap-10">
        <h1 className="text-5xl font-semibold text-center">More Blogs</h1>
        <div className="flex overflow-auto gap-10">
          {blogs?.map(
            (blog: {
              mainImage?: any;
              publishedAt?: string;
              read_time?: number;
              title?: string;
              subtitle?: string;
              slug?: any;
            }) => {
              return (
                blog && (
                  <BlogCard
                    image={urlFor(blog?.mainImage).url()}
                    date={getDate(new Date(blog?.publishedAt || "2023-01-01"))}
                    readtime={blog?.read_time}
                    title={blog?.title}
                    subtitle={blog?.subtitle}
                    slug={blog?.slug.current}
                    key={blog?.slug.current}
                  />
                )
              );
            }
          )}
        </div>
      </div>
      <CTA />
    </Layout>
  );
}

export default BlogPost;
