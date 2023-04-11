import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Input, Button, Select, message } from 'antd'
import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import Email from '../../images/email.svg'
import connect_img1 from '../../images/connect_img1.svg';
import connect_img2 from '../../images/connect_img2.svg';
import connect_img3 from '../../images/connect_img3.svg';

import {
  ConnectSection,
} from './styles';

export const ConnectPreviewSection = () => {
  return (
    <ConnectSection>
      <div className="connectSection">
        <h1 className="connect_title">Connect your tools, connect your teams</h1>
        <p className="connect_description">Slack channels are the place for work, Bring your tools to your team, save time and avoid context-switching.</p>
      </div>
      <div className="connect_cards_sec">
        <div className="connect_cards">
          <img src={connect_img1} alt="connect_img1" className="card_img" />
          <h1 className="card_title">Unified and secure </h1>
          <p className="card_description">Lorem ipsum dolor sit amet consectetur. Pellentesque cursus habitant vel nullam cras pellentesque amet. Vulputate sagittis cras fusce fermentum. Mauris lorem sapien scelerisque nunc quis suspendisse. Senectus venenatis neque tellus duis erat amet id praesent. Consequat integer consectetur urna cras egestas elit mi neque pellentesque.</p>
        </div>
        <div className="connect_cards">
          <img src={connect_img2} alt="connect_img1" className="card_img" />
          <h1 className="card_title">No additional costs </h1>
          <p className="card_description">Lorem ipsum dolor sit amet consectetur. Pellentesque cursus habitant vel nullam cras pellentesque amet. Vulputate sagittis cras fusce fermentum. Mauris lorem sapien scelerisque nunc quis suspendisse. Senectus venenatis neque tellus duis erat amet id praesent. Consequat integer consectetur urna cras egestas elit mi neque pellentesque.</p>
        </div>
        <div className="connect_cards">
          <img src={connect_img3} alt="connect_img1" className="card_img" />
          <h1 className="card_title">Works on the move</h1>
          <p className="card_description">Lorem ipsum dolor sit amet consectetur. Pellentesque cursus habitant vel nullam cras pellentesque amet. Vulputate sagittis cras fusce fermentum. Mauris lorem sapien scelerisque nunc quis suspendisse. Senectus venenatis neque tellus duis erat amet id praesent. Consequat integer consectetur urna cras egestas elit mi neque pellentesque.</p>
        </div>
      </div>
    </ConnectSection>
  );
};

const Contact = props => {

  const [contactContent, setContactContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/contact.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            call
            email
            categories {
              id
              title
              value
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data.file) {
      setContactContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <ConnectPreviewSection
          title={contactContent.title}
          email={contactContent.email}
          categories={contactContent.categories}
        />
      }
    </Fragment>
  )
}

export default Contact
