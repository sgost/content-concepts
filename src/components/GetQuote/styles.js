import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const QuoteFormSection = styled.div`
    background: #F5FBFF;
    width:100%;
    padding-top:3vw;
    h1{
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
color: #222222;
text-align:center;
margin-top:46px;
    }
  .quoteForm {
    width:60.6474820143885vw;
    height:fit-content;
    margin: 0 auto;
    background:white;
    padding:2.6vw 6.11510791366906vw 6.47482014388489vw 6.11510791366906vw;
    border-radius:1vw;
    @media (max-width: 768px) {
      width:90%;
      padding:8vw 6.11510791366906vw 6.47482014388489vw 6.11510791366906vw;
    }
  }
  .formLabel {
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 10px;
    display: inline-block;
  }
  #word_counter_cont{
    display:flex;
    width:100%;
    margin-bottom:2vw;
  }
  #word_counter_cont #wordCount{
    width: 132px;
height: 44px;
left: 0px;
top: 32px;
background: #FFFFFF;
outline:none;
box-sizing: border-box;
box-shadow: 0px 0px 5px rgb(25 39 67 / 10%);
border-radius: 8px;
border: 1px solid #d9d9d9;
text-align:center;
padding:1vw 1.2vw;
  }
  #word_counter_cont p{
    display: flex;
    align-items: center;
    font-style: normal;
font-weight: 500;
font-size: 2vw;
line-height: 3vw;
color: #222222;
margin-left:auto;
#count {
  width: 11vw;
  height: 3vw;
  overflow: hidden;
  margin: 0 0 0 1vw;
  color: rgb(5, 226, 156);
}
@media (max-width: 768px) {
  font-size: 15px;
}
@media (max-width: 500px) {
  font-size: 9px;
}
  }
  .categoryGroup {
    .ant-radio-inner {
      border: 0.5px solid #666666;
    }
    .categoryItem {
      padding: 8px 0px;
    }
    .ant-checkbox + span {
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
  }
  .submitBtn {
    margin-top:6vw;
    .ant-form-item-control-input-content {
      text-align: center;
    }
    .ant-btn {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      height: 48px;
      padding: 8px 60px;
      @media (max-width: 768px) {
        width:100%;
        padding: 1vw;
      }
    }
    .ant-btn:nth-child(2) {
      margin-left: 1rem;
    }
  }
  .inputGroupBlock .ant-form-item-control-input-content {
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .inlineInput {
    display: inline-block;
    width: calc(50% - 20px);
    .PhoneInput{                    
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: #444444;
    padding: 8px 24px 8px 15px;
    background: #FFFFFF;
    border: 0.5px solid #CCCCCC;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgb(25 39 67 / 10%);
    border-radius: 8px;
    }
    #inlineInput{
      outline:none;
      border:none;
    }
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      width: calc(50% - 12px);
    }
    .PhoneInput {
    display: flex;
    align-items: center;
    width: 100%;
}
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .emailInput {
    margin-left: 40px;
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      margin-left: 20px;
    }
    @media (max-width: 576px) {
      margin-left: 0;
    }
  }
`;
export const Quotepop = styled.div`
height: 100vh;
background:white;
padding:50px 0 75px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

Button{
  width: 242px;
height: 48px;
background: #1565C0;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
border:none;
outline:none;
cursor:pointer;
@media (max-width:750px) {
margin-top:10vw;
}
}
#pays{
  background:white;
  padding: 0 11.6546762589928vw 5.25179856115108vw 11.6546762589928vw;
  margin-top:4vw;
  width:100vw;
}
#pays #pop_title {
  display:none
}
#pop_conteiner{
  width:700px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 auto 30px auto;
  padding:50px 0 34px 0;
  border-bottom: 0.5px solid #CCCCCC;
  @media(max-width:580px){
    width:100vw;
  }
}
.button_container {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background: white !important;
    color: black !important;
    border: 1px solid black;
  }
   #Quotepop_t3{
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #666666;
margin-top:17px;
text-align:center;
width: 55vw;
display: flex;
flex-direction: column;
@media(max-width:750px){
width:100%;
}
}
}
 #pay_containers {
  margin-top:3vw;
}
.anticon svg {
    width:50px;
    height:50px;
    margin:20px auto;
}
#pop_conteiner p{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
@media(max-width:580px){
  font-size: 3vw;
}
}
#pop_conteiner #Quotepop_t1{
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #666666;
margin-top: 20px;
}
#pop_conteiner #Quotepop_t2{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
margin-top:8px;
}
#pop_conteiner #Quotepop_date{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
margin-top:0;
}

#pop_conteiner #Quotepop_t4{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
margin-top:8px;
}
`;

export const LoaderPopup = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const SuccessPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
.success_popup {
  display: flex;
  background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05);
    pointer-events: auto;
    padding: 29px 24px;
    max-width: 500px;
    .SmileOutlined {
      font-size: 40px;
      color: green;
      margin-right: 10px;
    }
    .success_text {
      display: flex;
      flex-direction: column;
    
    .popup_title {
      color: rgba(0,0,0,.88);
      font-weight: 600;
      font-size: 22px;
    }
    .popup_description {
      font-size: 18px;
      margin-top: 15px;
      line-height: 1.5;
    }
    .conf_btn {
      background: #0e63c1;
      border: none;
      outline: none;
      margin: 10px 0 0 auto;
      border-radius: 8px;
      color: white;
      font-size: 14px;
      box-shadow: 0 2px 0 rgba(5,145,255,.1);
      padding: 7px 20px;
      cursor: pointer;
    }
}
}
`