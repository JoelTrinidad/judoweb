import styled from "styled-components";
import { fonts } from "../../styles/global";

export const NavbarContainer = styled.div`
  font-family: ${fonts.secondary};
  color: #fff;
  background: rgba(20, 15, 7, 0.7);
  padding: 0 20px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  h1 {
    font-weight: 600;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px){
    justify-content: center;
    flex-grow: 1;
  }
`;

export const ImageLogo = styled.img`
  width: 90px;
  padding-right: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 400;
    padding: 0 13px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "inline-grid" : "none")};
    position: absolute;
    top: 80px;
    left: 0;
    background: rgba(20, 15, 7, 0.7);
    padding: 10px 0 20px 0;
    width: 100%;
  }
`;

export const ContainerBarsMenu = styled.div`
  display: none;
  color: #fff;
  font-size: 36px;

  @media (max-width: 768px) {
    display: block;
  }
`;
