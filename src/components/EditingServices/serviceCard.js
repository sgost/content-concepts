import React from "react";
import nib from "../../images/nib.svg";
import { ServiceCardPreview } from "./styles";
import { ArrowRightOutlined } from '@ant-design/icons';

const ServiceCardSec = ({ content }) => {
    return (
        <ServiceCardPreview>
            <div className="service_card_container" style={{ background: `${content?.backgroundColor}` }}>
                <div className="service_card">
                    <img src={content?.image?.publicURL ? content?.image?.publicURL : content?.image} alt="service_card" className="service_image" />
                    <div className="service_desc_div">
                        <h1 className="service_card_title">{content?.title}</h1>
                        {content?.bulletpoints?.map((itm) => {
                            return (
                                <a href={itm?.link} className="service_points" key={itm?.title} target="_blank" rel="noreferrer">
                                    <img src={nib} className="nib" alt="nib" />
                                    {itm?.title}
                                </a>
                            )
                        })}
                        <a href={content?.buttonLink}><button className="more_details_btn">More Details (CTA)<ArrowRightOutlined /></button></a>
                    </div>
                </div>
            </div>
        </ServiceCardPreview>
    )
}
export default ServiceCardSec;