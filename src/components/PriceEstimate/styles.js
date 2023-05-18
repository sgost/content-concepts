import styled from "styled-components"

export const PriceEstimateMain = styled.div`
  width: 100%;
  height: fit-content;
  background: #f5fbff;
  padding: 0 0 0 0;
  @media (max-width: 750px) {
    background: white;
  }
`

export const PriceEstimateContainer = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 4.02877697841727vw;
  border: 0.0359712230215827vw solid #cccccc;
  border-radius: 0.575539568345324vw;
  padding: 3vw;
  background: white;
  position: relative;
  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    padding: 4vw 8vw;
    border: none;
  }
  #map {
    display: flex;
    font-weight: 500;
    font-size: 1.1vw;
    line-height: 1.72661870503597vw;
    color: #57697D;
    text-align: center;
    margin-top: 1.5vw;
    .round {
      width: 1.8vw;
      height: 1.8vw;
      justify-content: center;
      align-items: center;
      background: #1DCA94;
      color: white;
      border-radius: 50%;
      margin-right: 0.6vw;
      font-size: 0.9vw;
    }
    .less_arrow {
      width: 2vw;
      margin: 0 10px;
    }
    @media (max-width: 750px) {
      display: none;
    }
  }
  #map .icon {
    margin: 0 0.5vw;
  }
`

export const PriceEstimateContMain = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0 3vw 2vw 4vw;
  @media (max-width: 750px) {
    width: 100%;
    padding: 0;
  }
  #slide_label:nth-child(1) {
    margin-top: 0;
  }
  #slide_label:nth-child(1) h1 {
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 2.01438848920863vw;
    line-height: 3.02158273381295vw;
    color: #333333;
    @media (max-width: 750px) {
      font-size: 5.71428571428571vw;
      line-height: 8.57142857142857vw;
      text-align: center;
    }
  }
  #slide_label {
    margin-top: 3.45323741007194vw;
    .round {
      width: 1.8vw;
      height: 1.8vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #1DCA94;
      color: white;
      border-radius: 50%;
      margin-right: 0.6vw;
      font-size: 0.9vw;
    }
    label {
      display: flex;
    }
    @media (max-width: 750px) {
      text-align: center;
      line-height: 6.53061224489796vw;
    }
  }
  #slide_label:nth-child(2) {
    display: flex;
    @media (max-width: 750px) {
      flex-direction: column;
    }
  }
  label {
    font-style: normal;
    font-weight: normal;
    font-size: 1.29496402877698vw;
    line-height: 2.30215827338129vw;
    color: #333333;
    @media (max-width: 750px) {
      font-size: 3.6734693877551vw;
      text-align: center;
      line-height: 6.53061224489796vw;
    }
  }
  .uploadBtn2 {
    width: 15.6834532374101vw;
    height: 3.45323741007194vw;
    font-size: 1.00719424460432vw;
    border: 0.0359712230215827vw solid #cccccc;
    padding: 0;
  }
  #slider_cont {
    margin-top: 5.68345323741007vw;
  }
  #slider_buttons {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.15827338129496vw;
    grid-template-rows: 4.1726618705036vw;
    margin-top: 1vw;
    @media (max-width: 750px) {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, 1fr);
      gap: 4.48979591836735vw;
      margin-top: 6.53061224489796vw;
    }
  }
  #slider_input {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: -0.8vw 0 0 0;
    height: 5vw;
    @media (max-width: 750px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      height: fit-content;
      margin: 0;
      padding-top: 3.26530612244898vw;
    }
  }
  #slider_input p {
    margin: 0.5vw 0 0 1vw;
    font-size: 0.9vw;
    font-weight: 500;
    line-height: 1.72661870503597vw;
    @media (max-width: 750px) {
      font-size: 2.44897959183673vw;
      line-height: 3.6734693877551vw;
      margin: 3.26530612244898vw 0 0 0;
    }
  }
  #peinput {
    width: 8.99280575539568vw;
    height: 3.16546762589928vw;
    left: 0px;
    top: 0px;
    background: #ffffff;
    outline: none;
    color: #1976D2;
    font-weight: 600;
    border: 0.0359712230215827vw solid #1976D2;
    box-sizing: border-box;
    border-radius: 0.575539568345324vw;
    padding: 0 2vw;
    text-align: center;
    margin-left: 1vw;
    font-size: 1vw;
    @media (max-width: 750px) {
      width: 25.5102040816327vw;
      height: 8.97959183673469vw;
      background: #ffffff;
      border: 0.102040816326531vw solid #cccccc;
      box-sizing: border-box;
      border-radius: 1.63265306122449vw;
      font-size: 3.6734693877551vw;
    }
  }
  #slider_buttons .pay_block2_container1 {
    background: white;
    color: black;
    border-radius: 0.575539568345324vw;
    font-weight: 600;
    font-size: 1.15107913669065vw;
    line-height: 1.72661870503597vw;
    border: 0.0359712230215827vw solid #cccccc;
    outline: none;
    cursor: pointer;
    transition: 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.9136690647482vw;
    height: 3.45323741007194vw;
    @media (max-width: 750px) {
      width: 47.9591836734694vw;
      height: 11.4285714285714vw;
      box-shadow: 0px 0px 1.63265306122449vw rgba(21, 39, 73, 0.15);
      border-radius: 1.63265306122449vw;
      margin: 0 auto;
      font-size: 3.26530612244898vw;
      line-height: 4.89795918367347vw;
      background: white;
      color: black;
    }
  }
  #slider_buttons .pay_block2_container2 {
    color: #ffffff;
    border: 0.2vw solid #1976d2;
    box-sizing: border-box;
    box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
    border-radius: 0.575539568345324vw;
    color: #1976d2;
    @media (max-width: 750px) {
      border-radius: 1.63265306122449vw;
      background: #1976d2;
      color: white;
    }
  }
  #slider_buttons .pay_block2_container1 #radio1 {
    width: 1.15107913669065vw;
    height: 1.15107913669065vw;
    border: 0.0359712230215827vw solid #666666;
    left: 1.07913669064748vw;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 0.719424460431655vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
      display: none;
    }
  }
  #slider_buttons .pay_block2_container2 #radio1 {
    width: 1.15107913669065vw;
    height: 1.15107913669065vw;
    border: 0.0359712230215827vw solid #666666;
    left: 1.07913669064748vw;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }
  #slider_buttons .pay_block2_container2 #radio1 #radio2 {
    width: 0.719424460431655vw;
    height: 0.719424460431655vw;
    background: #1976d2;
    border-radius: 50%;
    margin: auto;
  }
  #slider_buttons label {
    grid-column: 1/4;
    text-align: center;
    @media (max-width: 750px) {
      display: none;
    }
  }
`

export const PriceEstimateContainerb2 = styled.div`
  width: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 0.0359712230215827vw solid #cccccc;
  padding: 1vw 2vw 2vw 2vw;
  background: #1976d2;
  border-radius: 1vw;
  #p_b_top_main {
    width: fit-content;
    display: flex;
    margin-left: auto;
    @media (max-width: 750px) {
      display: none;
    }
  }
  #p_b_top_main2 {
    width: fit-content;
    display: flex;
    margin-left: auto;
    display: none;
    @media (max-width: 750px) {
      display: flex;
      margin: 6.12244897959184vw 0 auto 0;
    }
  }
  #p_b_top_main .currency1 {
    width: 5.32374100719424vw;
    height: 3.16546762589928vw;
    background: white;
    border-radius: 0.575539568345324vw;
    cursor: pointer;
    outline: none;
    margin-right: 0.863309352517986vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1vw;
    color: white;
    transition: 0.5s ease;
    border: 0.0359712230215827vw solid #cccccc;
  }
  #p_b_top_main .currency2 {
    background: #1976d2;
    color: white;
    box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
  }
  #p_b_top_main2 .currency1 {
    width: 5.32374100719424vw;
    height: 3.16546762589928vw;
    background: white;
    border-radius: 0.575539568345324vw;
    cursor: pointer;
    outline: none;
    margin-right: 0.863309352517986vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1vw;
    color: white;
    transition: 0.5s ease;
    border: 0.0359712230215827vw solid #cccccc;
    @media (max-width: 750px) {
      width: 15.1020408163265vw;
      height: 8.97959183673469vw;
      border-radius: 1.63265306122449vw;
      font-size: 3.4vw;
      line-height: 6.53061224489796vw;
      margin-right: 2vw;
    }
  }
  #p_b_top_main2 .currency1:last-child {
    margin-right: 0;
  }
  #p_b_top_main2 .currency2 {
    background: #1976d2;
    color: white;
    box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
  }
  #p_b_top {
    text-align: center;
  }
  #p_b_top h1 {
    font-weight: 600;
    font-size: 1.29496402877698vw;
    line-height: 3.02158273381295vw;
    color: white;
    text-align: center;
    margin-top: 2.15827338129496vw;
    @media (max-width: 750px) {
      font-size: 5.71428571428571vw;
      line-height: 8.57142857142857vw;
    }
  }
  #p_b_top #prize_box {
    padding: 0 0.5vw;
    margin: 0 auto;
    overflow: hidden;
    width: 17vw;
    height: 3vw;
    padding: 0 0 0 2vw;
    @media (max-width: 750px) {
      width: 51vw;
      height: 13vw;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }
  }
  #p_b_top #prize_box h2 {
    font-weight: 600;
    font-size: 2.58992805755396vw;
    line-height: 3vw;
    color: white;
    text-align: center;
    width: 12vw;
    height: 7vw;
    @media (max-width: 750px) {
      font-size: 9.79591836734694vw;
      width: min-content;
      line-height: inherit;
      text-align: center;
      height: inherit;
      width: 50vw;
    }
  }
  #p_b_middle {
    text-align: center;
    width: 100%;
    height: 4.5vw;
    margin-top: 2vw;
  }
  #p_b_middle h1 {
    font-weight: 500;
    font-size: 1.15107913669065vw;
    line-height: 1.72661870503597vw;
    color: white;
    text-align: center;
    @media (max-width: 750px) {
      font-size: 3.26530612244898vw;
      line-height: 4.89795918367347vw;
      margin-top: 6.12244897959184vw;
    }
  }
  #p_b_middle h1:nth-child(2) {
    font-style: normal;
    font-weight: 600;
    font-size: 1.15107913669065vw;
    line-height: 1.72661870503597vw;
    color: white;
    @media (max-width: 750px) {
      font-size: 3.26530612244898vw;
      line-height: 4.89795918367347vw;
      margin-top: 0px;
    }
  }
  #p_b_bottom Button {
    padding: 1vw;
    background: white;
    border-radius: 0.575539568345324vw;
    font-style: normal;
    font-weight: 600;
    font-size: 1.00719424460432vw;
    color: #1976d2;
    outline: none;
    border: 0.0359712230215827vw solid #cccccc;
    cursor: pointer;
    box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
    transition: 0.5s ease;
    margin-top: 3vw;
    padding: 1vw 2vw;
    line-height: unset;
    @media (max-width: 750px) {
      width: 47.9591836734694vw;
      height: 11.4285714285714vw;
      border-radius: 1.63265306122449vw;
      margin-top: 16.3265306122449vw;
      font-size: 3.26530612244898vw;
    }
  }
  #p_b_bottom Button:hover {
    color: #ffffff;
  }
  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 1vw 2vw 2vw 2vw;
    margin: 14.4897959183673vw auto 0 auto;
  }
`
