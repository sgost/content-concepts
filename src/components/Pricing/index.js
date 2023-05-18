import React from "react"
import { Tabs } from 'antd';
import PricingLevels from './levels';
import {
  LevelsSection,
  SectionHeading,
  TabsContainer
} from './styles';

const { TabPane } = Tabs;

const Pricing = ({ content }) => {
  return (
    <div id="pricing">
      <LevelsSection>
        <SectionHeading>
          <h2>{content?.heading}</h2>
          <h3>{content?.subHeading}</h3>
        </SectionHeading>
        <TabsContainer>
          <Tabs animated={{tabPane: true}}>
            {
              content?.types && content?.types?.map(dataItem =>
                <TabPane tab={dataItem?.title} key={dataItem?.id}>
                  <PricingLevels content={dataItem?.pricing} />
                </TabPane>
              )
            }
          </Tabs>
        </TabsContainer>
      </LevelsSection>
    </div>
  )
}

export default Pricing
