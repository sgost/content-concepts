import React from "react";
import { Link } from "gatsby";
import { Button } from 'antd'
// import Marker from '../../images/tick_filled.svg';
import {
    EditingLinksPreview,
    TypesContainer,
    // FeaturesListContainer,
    // FeatureSecList,
    RefundSection,
    ButtonContainer,
} from "./styles";


const EditingLinks = ({ content, description, preview }) => {

    const getPath = typeof window !== 'undefined' && window.location.pathname;
    
    return (
        <EditingLinksPreview>
            <TypesContainer>
                {
                    preview ? <div>{description}</div> : <div dangerouslySetInnerHTML={{ __html: description }} />
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
            <RefundSection>
                <div dangerouslySetInnerHTML={{ __html: content.message }} />
            </RefundSection>

            <ButtonContainer>
                <Link to={ getPath.includes("content_writing") ? "/contact" : "/pricing/" }><Button type="primary">{content?.btnTxt?.quote ? content?.btnTxt?.quote : 'Get Quote'}</Button></Link>
                <Button onClick={() => window.location.href = "#editingSample"}>{content?.btnTxt?.sample ? content?.btnTxt?.sample : 'Check Sample'}</Button>
                <Button onClick={() => window.location.href = "#editingProcess"}>{content?.btnTxt?.editing ? content?.btnTxt?.editing : 'Editing Process'}</Button>
            </ButtonContainer>
        </EditingLinksPreview>
    )
}
export default EditingLinks;