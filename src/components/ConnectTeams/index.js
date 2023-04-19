import React from "react"
import {
  ConnectSection,
} from './styles';

const ConnectPreviewSection = ({
  title,
  description,
  content
}) => {
  return (
    <ConnectSection>
      <div className="connectSection">
        <h1 className="connect_title">{title}</h1>
        <p className="connect_description">{description}</p>
      </div>
      <div className="connect_cards_sec">
        {content?.map((item) => {
          return (
            <div className="connect_cards" key={item?.title}>
              <img src={item?.image?.publicURL ? item?.image?.publicURL : item?.image} alt="connect_img1" className="card_img" />
              <h1 className="card_title">{item?.title} </h1>
              <p className="card_description">{item?.description}</p>
            </div>
          )
        })}
      </div>
    </ConnectSection>
  );
};

export default ConnectPreviewSection;