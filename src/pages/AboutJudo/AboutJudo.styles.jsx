import styled from "styled-components";
import { fonts } from "../../styles/global";

export const AboutContainer = styled.div`
  font-family: ${fonts.primary};
  color: #fff;
  //background: radial-gradient(circle, rgba(16,43,80,1) 0%, rgba(20,15,7,1) 100%);
  background: conic-gradient(from 59.7deg at 102.85% -3.16%, #000000 0deg, #140F07 137.72deg, #102547 183.75deg, #140F07 217.31deg, #000000 360deg);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 120px;
  font-family: ${fonts.secondary};
`;