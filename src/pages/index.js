import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/Banner"
import Features from "../components/Features"
import Clients from "../components/Clients"
import Services from "../components/Services"
import Specialization from "../components/Specialization"
import Testimonial from "../components/Testimonial"
import Process from "../components/Process"
// import Customers from "../components/Customers"
import GoogleReviews from "../components/GoogleReviews"
import Contact from "../components/Contact"
import MediumArticles from "../components/MediumArticles"
import FAQ from "../components/FAQ"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/seo.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            keywords
          }
        }
      }
    }
  `);

  const seoData = data.file.childMarkdownRemark.frontmatter;

  const initialOptions = {
    "client-id": "AR_91GIac11DOZex5XHw9vYSjGmHPXTM3LbhIX0bbPShcUHlgTdwcT7jPgWdQt-ocJR67nXXOYDwtxSz",
    "currency": "USD",
    "intent": "capture"
};

  return (
    <PayPalScriptProvider
      options={initialOptions}
    >
      <Fragment>
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
        <Banner />
        <Features />
        <Clients />
        <Services />
        <Specialization />
        <Testimonial />
        <Process />
        {/* <Customers /> */}
        <GoogleReviews color="#F5FBFF" />
        <Contact />
        <MediumArticles />
        <FAQ path="home" />
      </Fragment>
    </PayPalScriptProvider>
  )
}

export default IndexPage
