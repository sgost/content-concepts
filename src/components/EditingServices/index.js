import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import MenuSection from "./menu"
// import Customers from "../Customers"
// import Contact from "../Contact"
import { FAQPreviewSection } from "../FAQ"

const EditingServices = ({ data }) => {
  const pricingContent = data.pageData.childMarkdownRemark.frontmatter;
  return (
    <Fragment>
      {data.markdownRemark.frontmatter.seo && (
        <SEO
          title={data.markdownRemark.frontmatter.seo.title}
          description={data.markdownRemark.frontmatter.seo.description}
          keywords={data.markdownRemark.frontmatter.seo.keywords}
        />
      )}
      <MenuSection
        content={data.markdownRemark.frontmatter}
        description={data.markdownRemark.html}
        pricingContent={pricingContent}
      />
      {/* <Customers /> */}
      {/* <Contact /> */}
      {data.markdownRemark.frontmatter.faq &&
        data.markdownRemark.frontmatter.faq?.toggle && (
          <FAQPreviewSection
            title={data.markdownRemark.frontmatter.faq.title}
            questions={data.markdownRemark.frontmatter.faq.questions}
          />
        )}
    </Fragment>
  )
}

export default EditingServices

export const query = graphql`
  query($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        highlight
        serviceHeader {
          decription
          serviceLink {
            title
            link
          }
        }
        btnTxt {
          quote
          sample
          editing
        }
        description
        editingToggle
        message
        connectToolsTitle
        connectToolsDec
        connectToolsToggle
        connectTools {
          title
          description
          image {
            publicURL
          }
        }
        editorSecTitle
        nativeEditorSecToggle
        flashBannerTop {
          quoteTitle
          quoteLink
          quoteToggle
        }
        flashBannerCenter {
          quoteTitle
          quoteLink
          quoteToggle
        }
        flashBannerBottom {
          quoteTitle
          quoteLink
          quoteToggle
        }
        editingCard {
          title
          bulletpoints {
            title
            link
          }
          backgroundColor
          buttonLink
          image {
            publicURL
          }
        }
        editorSecCards {
          name
          designation
          description
          image {
            publicURL
          }
        }
        cardImage {
          publicURL
        }
        features {
          id
          title
          link
        }
        editingLevels {
          toggle
          title
          subHeading
          levelTypes {
            title
            themeColor
          }
          levels {
            id
            title
            copy
            substantive
            developmental
          }
        }
        editingSample {
          toggle
          title
          samples {
            id
            title
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        editingHighlights {
          toggle
          title
          highlights {
            id
            title
            description
            image {
              publicURL
            }
          }
        }
        serviceProcess {
          title
          steps {
            id
            order
            title
            description
            themeColor
          }
        }
        faq {
          toggle
          title
          questions {
            id
            question
            answer
          }
        }
        key
        parentType
        seo {
          title
          description
          keywords
        }
      }
    }
  }
`
