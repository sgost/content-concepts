import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ProcessSection = styled.div`
  background: white;
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px 50px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`;

export const SectionHeading = styled.div`
  padding: 20px 0px;
  text-align: center;
`;

export const ProcessList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  flex-wrap: wrap;
  padding: 40px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

export const ProcessListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 30px 15px 20px;
  max-width: 20%;
  h3 {
    margin: 0px 0px 15px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 35%;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 35%;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    margin: 15px;
  }
`;

export const ListOrder = styled.div`
  span {
    height: 46px;
    width: 46px;
    border-radius: 100%;
    background: ${props => props.theme};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`;

export const ListContent = styled.div`
  margin-left: 12px;
`;
