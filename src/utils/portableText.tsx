import { PortableText } from "@portabletext/react";
import Link from "next/link";

const serializers = {
  block: (props: any) => {
    switch (props.value.style) {
      case "h1":
        return (
          <h1 className="my-5 text-5xl font-semibold">{props.children}</h1>
        );
      case "h2":
        return (
          <h2 className="my-5 text-3xl font-semibold">{props.children}</h2>
        );
      case "h3":
        return <h3 className="my-3 text-xl font-semibold">{props.children}</h3>;
      case "h4":
        return <h4 className="my-3 text-lg font-semibold">{props.children}</h4>;
      default:
        return <p>{props.children}</p>;
    }
  },
  types: {},
  marks: {
    strong: (props: any) => <strong>{props.children}</strong>,
    enlarge: (props: any) => <span className="text-5xl">{props.children}</span>,
    em: (props: any) => <em>{props.children}</em>,
    code: (props: any) => <code>{props.children}</code>,
    underline: (props: any) => <u>{props.children}</u>,
    strike: (props: any) => <del>{props.children}</del>,
    blockquote: (props: any) => <blockquote>{props.children}</blockquote>,
    listItem: (props: any) => <li>{props.children}</li>,
    link: (props: any) => {
      // console.log(props)
      // Read https://css-tricks.com/use-target_blank/
      const { text, value } = props;
      return (
        <Link
          href={value?.href}
          rel="noopener noreferrer"
          className="underline"
        >
          {text}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }: { children: any }) => (
      <ul className="mt-xl ml-2" style={{ listStyle: "disc" }}>
        {children}
      </ul>
    ),
    number: ({ children }: { children: any }) => (
      <ol className="mt-lg">{children}</ol>
    ),
  },
};

export default function PortableTextComponent({ blocks }: { blocks: any }) {
  return (
    <>
      {/* @ts-ignore */}
      <PortableText value={blocks} components={serializers} />
    </>
  );
}
