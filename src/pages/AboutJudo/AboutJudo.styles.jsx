import styled from "styled-components";
import { fonts } from "../../styles/global";

export const AboutContainer = styled.div`
  font-family: ${fonts.primary};
  color: #fff;
  //background: radial-gradient(circle, rgba(16,43,80,1) 0%, rgba(20,15,7,1) 100%);
  background: conic-gradient(
    from 59.7deg at 102.85% -3.16%,
    #000000 0deg,
    #140f07 137.72deg,
    #102547 183.75deg,
    #140f07 217.31deg,
    #000000 360deg
  );
  min-height: 100vh;
  background-attachment: fixed;
`;

export const TitleContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 120px;
  font-family: ${fonts.secondary};
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 100px;
`;
export const IntroImage = styled.img`
  position: absolute;
  right: 100px;
  border: 1px solid #222222;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 0;
`;

export const IntroText = styled.div`
  font-size: 20px;
  max-width: 1000px;
  z-index: 1;
`;
