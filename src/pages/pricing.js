import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Pricing from "../components/Pricing"
// import Customers from "../components/Customers"
import GoogleReviews from "../components/GoogleReviews"
import Contact from "../components/Contact"
import PriceEstimate from "../components/PriceEstimate"
import QualityAssurance from "../components/QualityAssurance"
import FAQ from "../components/FAQ"

const PricingPage = ({ data }) => {

  const pricingContent = data.pageData.childMarkdownRemark.frontmatter;

  const seoData = data.seoData.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <PriceEstimate />
      <Pricing content={pricingContent} />
      <QualityAssurance />
      {/* <Customers /> */}
      <GoogleReviews color="#F5FBFF" />
      <Contact />
      <FAQ />
    </Fragment>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query {
    pageData: file(relativePath: {eq: "pricing/index.md"}) {
      childMarkdownRemark {
        frontmatter {
          heading
          subHeading
          types {
            id
            title
            pricing {
              id
              title
              editingServices
              price {
                inr
                usd
              }
              themeColor
            }
          }
        }
      }
    }
    seoData: file(relativePath: {eq: "pricing/seo.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`
