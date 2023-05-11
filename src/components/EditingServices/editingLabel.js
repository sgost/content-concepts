import React from "react";
import { EditingLabelConteiner } from './styles';

const EditingLabel = ({ content }) => {
    return (
        <EditingLabelConteiner>
            <h1 className="editing_title">{content?.quoteTitle}</h1>
            <a href={content?.quoteLink}><button className="order_now_btn">Order now</button></a>
        </EditingLabelConteiner>
    )
}
export default EditingLabel;
