import styled from "styled-components"
import { Col } from "antd"
import * as palette from "../../styles/variables"

export const MenuContainer = styled.div`
  padding: 60px 0px;
  max-width: 1100px;
  margin: 0 auto;
  .blog_image {
    display: none;
    @media (max-width: 750px) {
      display: flex;
    }
  }
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .ant-layout {
    background: ${palette.WHITE_COLOR};
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  .ant-layout-content {
    padding: 0px 30px;
    min-height: 280px;
    ${"" /* width: 50% !important; */}
    @media only screen and (min-width: 576px) and (max-width: 992px) {
      padding: 0px 10px;
    }
    @media (max-width: 576px) {
      width: 100% !important;
      padding: 30px 0px;
    }
  }
  .ant-layout-sider {
    ${"" /* width: 50% !important; */}
    margin: 0px 30px;
    flex: unset !important;
    max-width: 50% !important;
    background: transparent !important;
    @media only screen and (min-width: 576px) and (max-width: 992px) {
      margin: 0px 10px;
    }
    @media (max-width: 576px) {
      width: 100%;
      max-width: 100% !important;
      min-width: 100% !important;
      margin: 0;
    }
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  h2 {
    font-size: 32px;
    line-height: 48px;
    margin-right: 15px;
  }
  span {
    font-weight: normal;
    font-size: 16px;
    line-height: 40px;
    color: ${palette.BUTTON_PRIMARY};
  }
  @media only screen and (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    h2 {
      line-height: 40px;
    }
    span {
      margin-left: 0;
      line-height: 30px;
    }
  }
`

export const SiderImage = styled.div`
  width: 45%;
  float: right;
  margin-left: 30px;
  @media (max-width: 750px) {
    display: none;
  }
`

export const TypesContainer = styled.div`
  margin: 8px 0px;
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-bottom: 5px;
  }
  h1 {
    margin-top: 23px;
  }
  h2 {
    margin-top: 23px;
  }
  h3 {
    margin-top: 23px;
  }
`

export const FeaturesListContainer = styled.ul`
  margin: 35px 0px;
`

export const FeatureSecList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  img {
    width: 16px;
    height: 16px;
  }
  p {
    font-size: 16px;
    margin-left: 12px;
    a:hover {
      text-decoration: underline;
    }
  }
`

export const RefundSection = styled.div`
  p {
    font-size: 20px;
    line-height: 30px;
  }
  span {
    font-weight: 600;
    margin-top: 5px;
    display: block;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction row;
  margin: 35px 0px;
  .ant-btn {
    font-size: 14px;
    line-height: 21px;
    height: 38px;
    padding: 8px 24px;
    margin-right: 20px;
    &:last-child {
      margin-left: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      margin-right: 10px;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    flex-wrap: wrap;
    .ant-btn {
      margin: 5px 10px 5px 0px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    margin: 30px 20px;
    .ant-btn {
      width: 100%;
      margin: 10px 0px;
    }
  }
`

// Levels Section
export const LevelsListing = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  .cardCol {
    margin: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(69, 68, 68, 0.15);
    img {
      width: 15px;
      height: 15px;
    }
    .hyphen {
      font-size: 15px;
      font-weight: 600;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      margin: 0px 6px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      margin: 0px;
    }
    @media (max-width: 576px) {
      img {
        width: 12px;
        height: 12px;
      }
      .hyphen {
        font-size: 12px;
      }
    }
  }
  .ant-list-header {
    border: none;
    padding: 0;
    .cardCol {
      padding: 10px;
      font-weight: 500;
      color: ${palette.WHITE_COLOR};
      border-radius: 8px 8px 0px 0px;
    }
  }
  .ant-list-footer {
    padding: 30px 0px;
    .cardCol {
      box-shadow: none !important;
      .ant-btn {
        border: 1px solid transparent !important;
      }
    }
  }
  .listItemsContainer {
    padding: 0px;
    border: none !important;
    .ant-row {
      width: 100%;
    }
    .ant-col {
      padding: 10px;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: ${palette.PRIMARY_TXT_COLOR};
      @media (max-width: 576px) {
        font-size: 12px;
      }
    }
    &:last-child {
      .cardCol {
        border-radius: 0px 0px 8px 8px;
      }
    }
    .cardCol {
      background: ${palette.WHITE_COLOR};
    }
    &:nth-child(odd) {
      .cardCol {
        background: ${palette.HAWKES_BLUE};
      }
    }
  }
`

export const LevelsSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`

export const SectionHeading = styled.div`
  padding: 20px 0px;
  text-align: center;
  span {
    font-size: 18px;
    font-weight: normal;
  }
`

// samples section
export const SamplesSection = styled.div`
  background: ${palette.WHITE_COLOR};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`

export const TabsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: 1px solid ${palette.DARK_GREY};
  }
  .ant-tabs-nav-list {
    width: 100%;
    @media (max-width: 576px) {
      width: auto;
    }
    .ant-tabs-tab {
      width: 30%;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 35px;
      color: ${palette.CHARCOAL};
      opacity: 0.6;
      justify-content: center;
      @media only screen and (min-width: 320px) and (max-width: 992px) {
        width: auto;
        padding: 12px;
      }
    }
    .ant-tabs-tab-active {
      color: ${palette.BUTTON_PRIMARY};
      opacity: 1;
    }
  }
  .ant-tabs-ink-bar {
    background: ${palette.BUTTON_PRIMARY};
  }
`

export const TabContent = styled.div`
  padding: 30px;
  p {
    font-size: 18px;
    line-height: 40px;
    color: ${palette.CHARCOAL};
  }
  .sampleImage {
    background: ${palette.WHITE_COLOR};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 30px;
    margin: 30px auto 0 auto;
    width: 95%;
  }
  @media (max-width: 576px) {
    padding: 30px 20px 0px;
    .sampleImage {
      padding: 20px;
    }
    p {
      line-height: 35px;
    }
  }
`

// highlights section
export const HighlightsSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .highlightsList {
    max-width: 1100px;
    margin: 0 auto !important;
    justify-content: center;
    padding: 30px 0px;
    @media (min-width: 1500px) {
      max-width: 1300px;
    }
    .card {
      padding: 30px;
      @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding: 20px;
      }
      @media only screen and (min-width: 576px) and (max-width: 768px) {
        padding: 15px;
      }
      @media (max-width: 576px) {
        padding: 20px;
      }
    }
  }
`

export const HighlightCard = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 2px 2px 16px rgba(16, 50, 101, 0.15);
  border-radius: 8px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  h3 {
    margin: 15px 0px;
    text-align: center;
  }
  p {
    text-align: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 30px;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 25px;
  }
`

// quality section
export const QualitySection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .qualityContent {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: 576px) {
      padding: 30px 0px;
    }
    .qualityBadge {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
      }
    }
    .contentDesc {
      padding-left: 50px;
      h2 {
        font-size: 28px;
        line-height: 42px;
        color: ${palette.SPRING_GREEN};
      }
      p {
        font-size: 16px;
        color: ${palette.LIGHT_GREY};
        margin-top: 12px;
      }
      @media (max-width: 576px) {
        padding: 20px 0px;
        h2,
        p {
          text-align: center;
        }
      }
    }
  }
`

// service card
export const ServiceCard = styled.div`
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 32px 0px;
  text-align: center;
  h3 {
    color: rgba(52, 152, 219, 0.7);
    padding: 0px 12px;
  }
`

export const PriceSection = styled.div`
  margin: 16px 0px 25px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  .startingText {
    display: block;
    margin-bottom: 5px;
  }
  .priceSec {
    display: flex;
    flex-direction: column;
  }
  .priceValue {
    margin: 5px 0px;
    span {
      font-weight: bold;
      font-size: 22px;
    }
  }
`

export const TagContent = styled.div`
  padding: 8px;
  background: rgb(255, 246, 218);
  margin-bottom: 30px;
  p {
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }
`

export const DescSection = styled.div`
  margin-bottom: 30px;
  padding: 0px 40px;
  p {
    font-size: 14px;
  }
`

export const ButtonSection = styled.div`
  padding: 15px 45px 0px;
  button {
    width: 100%;
    @media (max-width: 992px) {
      width: auto;
    }
  }
`

export const FooterCol = styled(Col)`
  .ant-btn {
    background-color: ${props => props.theme} !important;
    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme} !important;
    }
  }
`

export const BreadCrumps = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  .active {
    font-weight: bold;
    color: #1976d2;
  }
`

export const EditingLabelConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.4vw;
  padding: 2.2vw 0;
  background-color: ${palette.SECONDARY_SECTION_BACKGROUND};
  .editing_title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 2.07vw;
    line-height: 3.1vw;
    color: #ffffff;
  }
  .order_now_btn {
    width: 12.6vw;
    height: 3.5vw;
    background: #07f5aa;
    border-radius: 0.5vw;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.1vw;
    line-height: 1.7vw;
    color: #16386c;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 756px) {
    padding: 7vw 4vw;
    flex-direction: column;
    align-items: flex-start;
    .editing_title {
      font-size: 4vw;
      line-height: 5vw;
    }
    .order_now_btn {
      width: 34vw;
      height: 9vw;
      border-radius: 2vw;
      font-size: 3vw;
    }
  }
`

export const ServiceCardPreview = styled.div`
  background: linear-gradient(
    93.02deg,
    #4187ff -7.15%,
    #1161ea 48.2%,
    #1444ec 98.16%
  );
  .service_card_container {
    .service_card {
      display: flex;
      gap: 3.7vw;
      padding: 5.1vw 3.7vw;
      align-items: center;
      @media (max-width: 756px) {
        flex-direction: column;
        padding: 10vw 3vw;
      }

      .service_image {
        width: 53vw;
        height: 30vw;
        border-radius: 2vw;
        @media (max-width: 756px) {
          width: 50vw;
          height: 28vw;
        }
      }
      .service_desc_div {
        display: flex;
        flex-direction: column;
        .service_card_title {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 600;
          font-size: 2vw;
          line-height: 2.9vw;
          color: #fff;
          margin-bottom: 2.2vw;
          @media (max-width: 756px) {
            font-size: 4vw;
            line-height: 5.9vw;
          }
        }
        .service_points {
          margin-top: 0.7vw;
          a {
            color: #fff;
            text-decoration: underline;
          }
          .nib {
            width: 1.1vw;
            height: 1.1vw;
            margin-top: 0.7vw;
          }
          display: flex;
          width: fit-content;
          justify-content: center;
          gap: 0.7vw;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 1vw;
          line-height: 2.3vw;
          color: #fff;
          opacity: 0.9;

          @media (max-width: 756px) {
            font-size: 2.5vw;
            line-height: 4.5vw;
            .nib {
              width: 3vw;
              height: 3vw;
              margin-top: 0.7vw;
              margin: 2vw 2vw 0 0;
            }
          }
        }

        .more_details_btn {
          width: 16.6vw;
          height: 4.1vw;
          padding-left: 1.4vw;
          background: #0038bc;
          border-radius: 0.5vw;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 1.1vw;
          line-height: 2.9vw;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          border: none;
          outline: none;
          gap: 0.7vw;
          margin-top: 2.2vw;
          cursor: pointer;
          @media (max-width: 756px) {
            width: 44vw;
            height: 10vw;
            font-size: 3vw;
            margin: 4vw auto auto auto;
            border-radius: 2vw;
            padding: 0 0 0 5vw;
          }
        }
      }
    }
  }
`

export const EditingLinksPreview = styled.div`
  padding: 6.5vw 8.8vw;
  .editing_links_main {
    .editing_links_title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 2vw;
      line-height: 2.9vw;
      color: #333333;
    }
    .editing_links_desc {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 1.1vw;
      line-height: 1.7vw;
      color: #1f173a;
      margin: 1.4vw 0;
    }
    .editing_links_points {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 1.3vw;
      line-height: 3.8vw;
      color: #171717;
      opacity: 0.9;
      .links_editing {
        color: #0038bc;
      }
    }

    @media (max-width: 756px) {
      .editing_links_title {
        font-size: 4vw !important;
        line-height: 5vw !important;
      }
      .editing_links_desc {
        font-size: 3vw;
        line-height: 4vw;
      }
      .editing_links_points {
        font-size: 2.5vw;
        margin-top: 4vw;
      }
    }
  }

  @media (max-width: 756px) {
    padding: 10vw 3vw;
    .editing_links_title {
      font-size: 4vw !important;
      line-height: 5vw !important;
    }
  }
`

export const NativeEditorPreview = styled.div`
  background-color: white;
  padding: 6.9vw 7.4vw;

  @media (max-width: 756px) {
    padding: 6vw 5vw;
  }
  .native_editor_preview_title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 2.07vw;
    line-height: 3.1vw;
    text-align: center;
    color: #333333;
    @media (max-width: 756px) {
      font-size: 3.5vw;
    }
  }

  .nativeEditor_div {
    display: grid;
    width: fit-content;
    gap: 8.8vw;
    margin: 7.4vw auto 0 auto;
    grid-template-columns: 20vw 20vw 20vw;
    .native_editor_card {
      background: #ffffff;
      box-shadow: 0px 0px 0.5vw rgba(21, 39, 73, 0.15);
      border-radius: 0.5vw;
      padding: 1.4vw 1.8vw;
      position: relative;
      .native_editor_img {
        width: 7.4vw;
        height: 7.4vw;
        background: #ffffff;
        box-shadow: 0px 0px 1.1vw rgba(21, 39, 73, 0.25);
        border-radius: 50%;
        padding: 0.2vw;
        position: absolute;
        top: -3.7vw;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user_card_title {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 1.3vw;
        line-height: 2vw;
        color: #1565c0;
        margin-top: 3.7vw;
      }
      .user_card_description {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 0.8vw;
        line-height: 1.7vw;
        color: #666666;
      }
      .card_desc_main {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 1vw;
        line-height: 1.7vw;
        color: #333333;
        margin-top: 0.7vw;
      }
    }
    @media (max-width: 756px) {
      display: flex;
      flex-direction: column;
      .native_editor_card {
        padding: 5vw;
        border-radius: 1.5vw;
        .native_editor_img {
          width: 19vw;
          height: 19vw;
          top: 3vw;
        }
        .user_card_title {
          font-size: 3vw;
          margin-top: 20.7vw;
        }
        .user_card_description {
          font-size: 2.3vw;
          margin-top: 2.5vw;
        }
        .card_desc_main {
          font-size: 2.5vw;
          line-height: 3.5vw;
          margin-top: 3vw;
        }
      }
    }
  }
`

export const EditingCardLinksPreview = styled.div`
  margin-top: 0;
`
