import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import MenuSection from './menu';
import Customers from "../Customers"
import Contact from "../Contact";
import { FAQPreviewSection } from "../FAQ";

const EditingServices = ({ data }) => {
  return (
    <Fragment>
      {
        data.markdownRemark.frontmatter.seo && <SEO title={data.markdownRemark.frontmatter.seo.title} description={data.markdownRemark.frontmatter.seo.description} keywords={data.markdownRemark.frontmatter.seo.keywords} />
      }
      <MenuSection content={data.markdownRemark.frontmatter} description={data.markdownRemark.html} />
      <Customers />
      <Contact />
      {
        data.markdownRemark.frontmatter.faq && data.markdownRemark.frontmatter.faq?.toggle &&
        <FAQPreviewSection
          title={data.markdownRemark.frontmatter.faq.title}
          questions={data.markdownRemark.frontmatter.faq.questions}
        />
      }
    </Fragment>
  )
}

export default EditingServices

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        highlight
        description
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
        quoteTitle
        quoteLink
        quoteToggle
        editingCard {
          title
          bulletpoints {
            title
          }
          backgroundColor
          buttonLink
          image {
            publicURL
          }
          editingCardLinks {
            title
            description
            links {
              title
              titleLink
              titleLinkDescription
            }
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

