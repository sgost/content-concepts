import React from "react";
import { NativeEditorPreview } from "./styles";


const NativeEditorsSec = ({ content, title }) => {
    return (
        <NativeEditorPreview>
            <h1 className="native_editor_preview_title">{title}</h1>
            <div className="nativeEditor_div">
                {content?.map((itm) => {
                    return (
                        <div className="native_editor_card" key={itm?.name}>
                            <div className="native_editor_img">
                                <img src={itm?.image?.publicURL ? itm?.image?.publicURL : itm?.image} alt="userAvatar" />
                            </div>
                            <h1 className="user_card_title">{itm?.name}</h1>
                            <p className="user_card_description">{itm?.designation}</p>
                            <p className="card_desc_main" dangerouslySetInnerHTML={{ __html: itm?.description }} />
                        </div>
                    )
                })}
            </div>
        </NativeEditorPreview>
    )
}
export default NativeEditorsSec;