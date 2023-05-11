import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import {
  FAQContainer,
  SectionHeading,
  QuestionList
} from './styles';

export const FAQPreviewSection = ({
  title,
  questions,
  path
}) => {

  const { Panel } = Collapse;

  return (
    <FAQContainer style={{ background: path === 'home' && '#fff' }}>
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <QuestionList>
        <Collapse
          accordion
          bordered={false}
          expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
        >
          {
            questions && questions.map(item =>
              <Panel
                header={
                  <div>
                    <span className="quesNumber">{String(item.id).padStart(2, '0')}</span>
                    <h3>{item.question}</h3>
                  </div>
                }
                key={item.id}
              >
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </Panel>
            )
          }
        </Collapse>
      </QuestionList>
    </FAQContainer>
  );
};

const FAQ = props => {

  const [content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "faq.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            questions {
              id
              question
              answer
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
        data.file && data.file.childMarkdownRemark.frontmatter.questions.length > 0 &&
        <FAQPreviewSection
          title={content.title}
          questions={content.questions}
          path={props.path}
        />
      }
    </Fragment>
  )
}

export default FAQ
