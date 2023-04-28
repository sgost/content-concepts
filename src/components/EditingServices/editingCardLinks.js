import React, { Fragment } from "react";
import ServiceCardSec from "./serviceCard";
import EditingLinks from "./editingLinks";
import { EditingCardLinksPreview } from "./styles";

const EditingCardLinks = ({ content, description, preview }) => {
    return (
        <EditingCardLinksPreview>
            {content?.editingCard?.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <ServiceCardSec content={item} />
                        <EditingLinks content={content} description={description} preview={preview} />
                    </Fragment>
                )
            })}
        </EditingCardLinksPreview>

    )
}
export default EditingCardLinks;