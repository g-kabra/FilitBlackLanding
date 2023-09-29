import React from "react";
import Script from "next/script";

import Layout from "@/components/layout";
import Home from "@/app/pages/home";

export default function Page() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
