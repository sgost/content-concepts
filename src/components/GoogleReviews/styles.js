import styled from "styled-components"
// import * as palette from "../../styles/variables"

export const GoogleReviewsSection = styled.div`
.google_reviews {
  padding: 75px 39px;
  .review_title {
    display: flex;
    align-items: center;
    margin: auto;
    gap: 0.9vw;
    font-weight: 600;
    width: fit-content;
    font-size: 28px;
    .google_icons {
      width: 30px;
    }
  }

  .review_card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .djbQLo {
      max-width: 100%;
    }
    .CarouselItem__CarouselItemContainer-sc-14kwh0g-0 {
        background: #ffffff !important;
        border: 2px solid rgba(21, 39, 73, 0.15) !important;
        padding: 20px;
        border-radius: 19px;
    }
  }
}
`