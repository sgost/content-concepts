import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TestimonialSection,
  TestimonialList,
  TestimonialListItem,
  CountWrapper,
  StatusCircle
} from './styles';

export const TestimonialPreviewSection = ({
  title,
  testimonials
}) => {
  return (
    <TestimonialSection>
      <TestimonialList>
        {
          testimonials && testimonials.map(dataItem =>
            <TestimonialListItem key={dataItem.id}>
              <CountWrapper>
                <StatusCircle theme={dataItem.themeColor}></StatusCircle>
                <h2>{dataItem.count.toLocaleString('en-IN')}<span className="customDot">&bull;</span></h2>
              </CountWrapper>
              <span className="titleText">{dataItem.title}</span>
            </TestimonialListItem>
          )
        }
      </TestimonialList>
    </TestimonialSection>
  );
};

const Testimonial = props => {

  const [content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/testimonial.md"}) {
        childMarkdownRemark {
          frontmatter {
            testimonials {
              id
              title
              count
              themeColor
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data.file) {
      setContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <TestimonialPreviewSection title={content.title} testimonials={content.testimonials} />
      }
    </Fragment>
  )
}

export default Testimonial
