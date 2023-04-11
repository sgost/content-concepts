import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Layout, Button } from "antd"
import EditingLabel from './editingLabel';
import GoogleReviews from "../GoogleReviews/index";
import EditingCardLinks from "./editingCardLinks";
import ConnectPreviewSection from "../ConnectTeams";
import MenuContent from './content';
import EditingLevels from './levels';
import EditingSamples from './samples';
import Highlights from './highlights';
import NativeEditorsSec from "./nativeEditors";
import { ProcessPreviewSection } from "../Process"
import {
  MenuContainer,
  ServiceCard,
  PriceSection,
  TagContent,
  DescSection,
  ButtonSection
} from './styles';
import blog_image from "../../images/blog_image.png";

const { Content, Sider } = Layout;

const MenuSection = props => {

  const data = props.content;

  const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <Fragment>
      <MenuContainer>
        <Layout>
          <Content>
            <MenuContent content={data} description={props.description} preview={props.preview} />
          </Content>
          <Sider>
            <img src={data?.cardImage?.publicURL ? data?.cardImage?.publicURL : data?.cardImage} alt="card_preview_image" className="blog_image" />
          </Sider>
        </Layout>
      </MenuContainer>
      {data?.connectToolsToggle && <ConnectPreviewSection
        title={data?.connectToolsTitle}
        description={data?.connectToolsDec}
        content={data?.connectTools}
      />}
      {/* {data?.quoteToggle && <EditingLabel content={data} />} */}
      {/* <GoogleReviews /> */}
      {data?.editingCard && <EditingCardLinks content={data?.editingCard} />}
      {
        data.serviceProcess && <ProcessPreviewSection title={data.serviceProcess.title} process={data.serviceProcess.steps} />
      }
      {data?.quoteToggle && <EditingLabel content={data} />}
      {data?.editingHighlights?.toggle && <Highlights content={data.editingHighlights} />}
      {data?.nativeEditorSecToggle && <NativeEditorsSec content={data?.editorSecCards} title={data?.editorSecTitle} />}
      {data?.quoteToggle && <EditingLabel content={data} />}
      {data?.editingSample?.toggle && <EditingSamples content={data?.editingSample} />}
      {data?.editingLevels?.toggle && <EditingLevels content={data?.editingLevels} />}
    </Fragment>
  )
}

export default MenuSection
