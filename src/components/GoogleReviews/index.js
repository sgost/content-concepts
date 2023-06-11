import React from "react";
import { GoogleReviewsSection } from "./styles";
import google_icon from "../../images/google_icon.svg";

const GoogleReviews = ({ color }) => {
    return (
        <GoogleReviewsSection>
            <div className="google_reviews" style={{ background: color ? color : "white" }}>
                <h1 className="review_title"><img src={google_icon} alt="img" className="google_icons" />Google Reviews</h1>
                <div className="review_card">
                  <div className="elfsight-app-28927a49-effc-4049-bbee-1d324c8c9703"></div>
                </div>
            </div>
        </GoogleReviewsSection>
    )
}
export default GoogleReviews;