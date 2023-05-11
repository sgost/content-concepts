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

  if (data.hasOwnProperty('editingCard')) {
    if (data.editingCard) {
      data.editingCard.map(item => {
        let getImage = getAsset(item.image);
        item.image = getImage.toString();
        return item;
      });
    }
  }

  if (data.hasOwnProperty('connectTools')) {
    if (data.connectTools) {
      data.connectTools.map(item => {
        let getImage = getAsset(item.image);
        item.image = getImage.toString();
        return item;
      });
    }
  }


  let image = entry.getIn(['data', 'cardImage']);
  let getImage = getAsset(image);

  const newTestData = {
    ...data,
    cardImage: getImage.toString()
  }

  return (
    <Fragment>
      {
        newTestData.title && <MenuSection content={newTestData} description={widgetFor('body')} preview={true} />
      }
      {
        newTestData.faq &&
        <FAQPreviewSection
          title={newTestData.faq.title}
          questions={newTestData.faq.questions}
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
