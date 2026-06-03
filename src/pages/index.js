import * as React from "react";
import { Helmet } from "react-helmet";

import PageTemplate from "@components/PageTemplate";
import Header from "@components/Header";
import Projects from "@components/Projects";
import Form from "@components/Form";
import Footer from "@components/Footer";

const IndexPage = () => (
  <PageTemplate>
    <Header />
    <Projects />
    <Form />
    <Footer />
  </PageTemplate>
);

export default IndexPage;

export const Head = () => {
  return (
    <>
      <Helmet>
        <title>Kaleshe | Helping small businesses grow with user-friendly websites</title>
        <meta
          name="description"
          content="Web designer creating modern, user-friendly websites that help small businesses grow online."
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" contact="@stubbornneko"></meta>
        <meta name="twitter:creator" content="@stubbornneko"></meta>
        <meta
          name="twitter:title"
          content="Kaleshe | Helping small businesses grow with user-friendly websites"
        ></meta>
        <meta
          name="twitter:description"
          content="Web designer creating modern, user-friendly websites that help small businesses grow online."
        ></meta>
        <meta name="twitter:image" content="../images/og_image.png"></meta>
        ​
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Kaleshe" />
        <meta
          property="og:title"
          content="Kaleshe | Helping small businesses grow with user-friendly websites"
        ></meta>
        <meta property="og:url" content="https://www.kaleshe.co.uk"></meta>
        <meta
          property="og:description"
          content="Web designer creating modern, user-friendly websites that help small businesses grow online."
        ></meta>
        <meta property="og:image" content="../images/open_graph.png"></meta>
        <meta property="og:image:alt" content="Kaleshe"></meta>
        <meta property="og:type" content="portfolio" />
      </Helmet>
    </>
  );
};
