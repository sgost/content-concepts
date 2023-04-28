import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ProcessSection,
  SectionHeading,
  ProcessList,
  ProcessListItem,
  ListOrder,
  ListContent
} from './styles';

export const ProcessPreviewSection = ({
  title,
  process
}) => {
  return (
    <ProcessSection id="editingProcess">
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <ProcessList>
        {
          process && process.map(dataItem =>
            <ProcessListItem key={dataItem.id}>
              <ListOrder theme={dataItem.themeColor}>
                <span>{dataItem.order}</span>
              </ListOrder>
              <ListContent>
                <h3>{dataItem.title}</h3>
                <p>{dataItem.description}</p>
              </ListContent>
            </ProcessListItem>
          )
        }
      </ProcessList>
    </ProcessSection>
  );
};

const Process = props => {

  const [processContent, setProcessContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/process.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            process {
              id
              order
              title
              description
              themeColor
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data.file) {
      setProcessContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <ProcessPreviewSection
          title={processContent.title}
          process={processContent.process}
        />
      }
    </Fragment>
  )
}

export default Process
