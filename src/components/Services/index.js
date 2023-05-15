import React, { Fragment, useState, useEffect } from "react"
import { Button, Row, Col } from "antd"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  ServicesSection,
  SectionHeading,
  ServiceListContainer
} from './styles';

export const HomeServicesSection = ({
  title,
  services
}) => {
  return (
    <Fragment>
      <ServicesSection>
        <SectionHeading>
          <h2>{title}</h2>
        </SectionHeading>
        <ServiceListContainer>
          <Row type="flex" className="servicesList">
            {
              services && services.map(dataItem =>
                <Col xs={24} sm={10} md={8} lg={8} xl={7} className="serviceListItem" key={dataItem.id}>
                  <div className="imageContainer">
                    {
                      dataItem.image.publicURL ? <img src={dataItem.image.publicURL} alt="service" /> : <img src={dataItem.image} alt="service" />
                    }
                  </div>
                  <h3>{dataItem.title}</h3>
                  <p>{dataItem.description}</p>
                  <Button type="primary">
                    <Link to={dataItem.link}>{dataItem?.btntext}</Link>
                  </Button>
                </Col>
              )
            }
          </Row>
        </ServiceListContainer>
      </ServicesSection>
    </Fragment>
  );
};

const Services = props => {

  const [servicesContent, setServicesContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/ourServices.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            services {
              id
              title
              description
              image {
                publicURL
              }
              link
              btntext
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data.file) {
      setServicesContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <HomeServicesSection
          title={servicesContent.title}
          services={servicesContent.services}
        />
      }
    </Fragment>
  )
}

export default Services
