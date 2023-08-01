import React from "react";
import Head from "next/head";

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
