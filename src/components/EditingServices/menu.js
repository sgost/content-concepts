import React, { Fragment } from "react"
import { Layout } from "antd"
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
} from './styles';

const { Content, Sider } = Layout;

const MenuSection = props => {

  const data = props.content;

  // const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
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
      {data?.flashBannerTop?.quoteToggle && <EditingLabel content={data?.flashBannerTop} />}
      <GoogleReviews />
      {data?.editingCard && <EditingCardLinks content={data?.editingCard} />}
      {
        data.serviceProcess && <ProcessPreviewSection title={data.serviceProcess.title} process={data.serviceProcess.steps} />
      }
      {data?.flashBannerCenter?.quoteToggle && <EditingLabel content={data?.flashBannerCenter} />}
      {data?.editingHighlights?.toggle && <Highlights content={data.editingHighlights} />}
      {data?.nativeEditorSecToggle && <NativeEditorsSec content={data?.editorSecCards} title={data?.editorSecTitle} />}
      {data?.flashBannerBottom?.quoteToggle && <EditingLabel content={data?.flashBannerBottom} />}
      {data?.editingSample?.toggle && <EditingSamples content={data?.editingSample} />}
      {data?.editingLevels?.toggle && <EditingLevels content={data?.editingLevels} />}
    </Fragment>
  )
}

export default MenuSection
