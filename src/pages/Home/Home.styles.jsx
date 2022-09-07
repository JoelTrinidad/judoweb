import styled from "styled-components";
import bgHome from "../../assets/img/bg-home.jpg";
import { fonts } from "../../styles/global";

export const HomeContainer = styled.div`
  font-family: ${fonts.primary};
  color: #fff;
  background: rgba(0, 0, 0, 0.3) url(${bgHome});
  background-size: cover;
  background-position: center top;
  background-blend-mode: darken;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 120px;
  font-family: ${fonts.secondary};
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 60px;
  }
  `;

export const WellcomeMessage = styled.p`
  font-size: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
