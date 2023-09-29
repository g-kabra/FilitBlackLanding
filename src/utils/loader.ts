"use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  return `https://filit.in/${src}?w=${width}&q=${quality || 75}`;
  // return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
}
