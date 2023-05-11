import styled from "styled-components"
import * as palette from "../../styles/variables"

export const ConnectSection = styled.div`
  padding: 40px 145px 100px 145px;
  background-color: ${palette.WHITE_COLOR};
  @media (max-width: 756px) {
    padding: 45px;
  }
  .connectSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .connect_title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 40px;
      color: #333333;
    }
    .connect_description {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #333333;
      @media (max-width: 756px) {
        margin-top: 13px;
    line-height: 27px;
      }
    }
  }

  .connect_cards_sec {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
    margin-top: 50px;
    @media (max-width: 756px) {
      display: flex;
    flex-direction: column;
    }
    .connect_cards {
      .card_img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
      .card_title {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #555555;
        margin: 8px 0 10px 0;
      }
      .card_description {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        color: #333333;
      }
    }
  }
`
