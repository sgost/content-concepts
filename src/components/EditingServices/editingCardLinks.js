import React, { Fragment } from "react";
import ServiceCardSec from "./serviceCard";
import EditingLinks from "./editingLinks";
import { EditingCardLinksPreview } from "./styles";

const EditingCardLinks = ({ content }) => {
    return (
        <EditingCardLinksPreview>
            {content?.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <ServiceCardSec content={item} />
                        <EditingLinks content={item?.editingCardLinks} />
                    </Fragment>
                )
            })}
        </EditingCardLinksPreview>

    )
}
export default EditingCardLinks;