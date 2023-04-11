import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MenuSection from "../../components/EditingServices/menu.js";
import { FAQPreviewSection } from "../../components/FAQ";

const ServicePreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if (data.hasOwnProperty('editingSample')) {
    if (data.editingSample.samples) {
      data.editingSample.samples.map(sample => {
        var getImage = getAsset(sample.image);
        sample.image = getImage.toString();
        return sample;
      });
    }
  }
  if (data.hasOwnProperty('editingHighlights')) {
    if (data.editingHighlights.highlights) {
      data.editingHighlights.highlights.map(highlight => {
        var getImage = getAsset(highlight.image);
        highlight.image = getImage.toString();
        return highlight;
      });
    }
  }

  if (data.hasOwnProperty('editorSecCards')) {
    if (data.editorSecCards) {
      data.editorSecCards.map(item => {
        let getImage = getAsset(item.image);
        item.image = getImage.toString();
        return item;
      });
    }
  }

  return (
    <Fragment>
      {
        data.title && <MenuSection content={data} description={widgetFor('body')} preview={true} />
      }
      {
        data.faq &&
        <FAQPreviewSection
          title={data.faq.title}
          questions={data.faq.questions}
        />
      }
    </Fragment>
  );

};

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ServicePreview;
