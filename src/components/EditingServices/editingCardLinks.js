import React, { Fragment } from "react";
import ServiceCardSec from "./serviceCard";
import EditingLinks from "./editingLinks";

const EditingCardLinks = ({ content }) => {
    console.log("content", content)
    return (
        <Fragment>
            {content?.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <ServiceCardSec content={item} />
                        <EditingLinks content={item?.editingCardLinks} />
                    </Fragment>
                )
            })}
        </Fragment>

    )
}
export default EditingCardLinks;