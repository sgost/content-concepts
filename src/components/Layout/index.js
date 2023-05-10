import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import { Notification } from "../Notification"
import OfferImage from '../../images/offer.svg'

import Header from "../Header"
import Footer from "../Footer"
import { GlobalStyle } from '../../styles/global-styles';
import whatsappLogo from "../../images/whatsapp-logo.svg"

const Layout = props => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/offers.md"}) {
        childMarkdownRemark {
          frontmatter {
            offer
            offerLink {
              title
              link
            }
          }
        }
      }
    }
  `);

  const offerData = data.file.childMarkdownRemark.frontmatter;

  useEffect(() => {
    if (offerData) {
      Notification({
        description: offerData.offer,
        image: OfferImage,
        linkText: offerData.offerLink.title,
        link: offerData.offerLink.link
      });
    }
  }, [offerData]);

  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (((window.location.pathname === '/sitemap/')
         || (window.location.pathname === '/about/') 
         || (window.location.pathname === '/contact/')
         || (window.location.pathname === '/blog')
         || (window.location.pathname.includes('pricing')) 
         || (window.location.pathname.includes('services')
         ))) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
    }
  }, [window.location.pathname]);

  return (
    <>
      <GlobalStyle />
      <div id="notification-wrapper"></div>
      <Header />
      <main>{props.children}</main>
      {
        showFooter && <Footer />
      }
      <div className="whatsappContainer">
        <a href="https://wa.me/+917010709536" target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} alt="contact" />
        </a>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout