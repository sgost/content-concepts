import React, { Fragment } from 'react'
import { Link } from "gatsby"
import { Button } from 'antd'
import Marker from '../../images/tick_filled.svg';
import {
  HeadingContainer,
  SiderImage,
  TypesContainer,
  // FeaturesListContainer,
  // FeatureSecList,
  RefundSection,
  ButtonContainer,
  BreadCrumps,
  FeatureLinksContainer
} from './styles';
// import nib from "../../images/nib.svg";
import less_arrow from "../../images/bread_crump_arrow.svg";

const MenuContent = ({ content, description, preview }) => {

  const getPath = typeof window !== 'undefined' && window.location.pathname

  return (
    <Fragment>
      <BreadCrumps>
        <p>Services</p> <img src={less_arrow} className="less_arrow" alt="less_arrow" /> <p className='active'>{content.title}</p>
      </BreadCrumps>
      <SiderImage>
        <img src={content?.cardImage?.publicURL ? content?.cardImage?.publicURL : content?.cardImage} alt="card_preview_image" className="service_banner_image" />
      </SiderImage>
      {content &&
        <div>
          <HeadingContainer>
            <h2>{content.title}</h2>
            {
              content.highlight && <span>{content.highlight}</span>
            }
          </HeadingContainer>
          {/* <ButtonContainer>
            <Link to="/pricing/"><Button type="primary">{content?.btnTxt?.quote ? content?.btnTxt?.quote : 'Get Quote'}</Button></Link>
            <Button onClick={() => window.location.href = "#editingSample"}>{content?.btnTxt?.sample ? content?.btnTxt?.sample : 'Check Sample'}</Button>
            <Button onClick={() => window.location.href = "#editingProcess"}>{content?.btnTxt?.editing ? content?.btnTxt?.editing : 'Editing Process'}</Button>
          </ButtonContainer> */}
          {/* <TypesContainer>
            {
              preview ? <div>{content?.serviceHeader?.description}</div> : <div dangerouslySetInnerHTML={{ __html: description }} />
            }
          </TypesContainer> */}

          <TypesContainer>
            {
              preview ? <div>{content?.serviceHeader?.decription}</div> : <div dangerouslySetInnerHTML={{ __html: content?.serviceHeader?.decription }} />
            }
          </TypesContainer>

          {/* <FeaturesListContainer>
            {
              content.features && content.features.map(dataItem =>
                <FeatureSecList key={dataItem.id}>
                  <img src={Marker} alt="features" />
                  <p>
                    {
                      dataItem.link ? <Link to={dataItem.link}>{dataItem.title}</Link> : dataItem.title
                    }
                  </p>
                </FeatureSecList>
              )
            }
          </FeaturesListContainer> */}
          <FeatureLinksContainer>
            <div className='FeatureLinks'>
              {content?.serviceHeader?.serviceLink?.map((item) => {
                return (
                  <div className='link_wrapper' key={item?.title}><img src={Marker} className='nib_image' alt="nib_image" /><p key={item?.title}>{item?.title && item?.title + ": "} <span dangerouslySetInnerHTML={{ __html: item?.link }} /></p></div>
                )
              })}
            </div>
          </FeatureLinksContainer>
          <RefundSection>
            <div dangerouslySetInnerHTML={{ __html: content.message }} />
          </RefundSection>

          <ButtonContainer>
            <Link to={ getPath.includes("content_writing") ? "/contact" : "/pricing/" }><Button type="primary">{content?.btnTxt?.quote ? content?.btnTxt?.quote : 'Get Quote'}</Button></Link>
            <Button onClick={() => window.location.href = "#editingSample"}>{content?.btnTxt?.sample ? content?.btnTxt?.sample : 'Check Sample'}</Button>
            <Button onClick={() => window.location.href = "#editingProcess"}>{content?.btnTxt?.editing ? content?.btnTxt?.editing : 'Editing Process'}</Button>
          </ButtonContainer>
        </div>
      }
    </Fragment>
  )
}

export default MenuContent;
