import React from "react";
import { GoogleReviewsSection } from "./styles";
import google_icon from "../../images/google_icon.svg";

const GoogleReviews = () => {
    return (
        <GoogleReviewsSection>
            <h1 className="review_title"><img src={google_icon} alt="img" className="google_icons" />Google Reviews</h1>
            <div className="review_card">
                <div className="elfsight-app-ba16b257-c2a1-492e-a143-2644db3fbd22"></div>
            </div>
        </GoogleReviewsSection>
    )
}
export default GoogleReviews;