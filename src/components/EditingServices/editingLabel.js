import React from "react";
import { EditingLabelConteiner } from './styles';

const EditingLabel = ({ content }) => {
    return (
        <EditingLabelConteiner>
            <h1 className="editing_title">{content}</h1>
            <button className="order_now_btn">Order now</button>
        </EditingLabelConteiner>
    )
}
export default EditingLabel;
