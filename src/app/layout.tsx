import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filit Bharat",
  description: "Making a financially literate Bharat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        id="google-analytics-s1"
      />

      <Script strategy="lazyOnload" id="google-analytics-s2">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body className={inter.className + " overflow-x-hidden w-screen"}>
        <ToastContainer theme="dark" />
        {children}
      </body>
    </html>
  );
}
