import styled from "styled-components";
import { fonts } from "../../styles/global";

export const FooterContainer = styled.footer`
  text-align: center;
  font-size: 13px;
  font-family: ${fonts.secondary};
  color: #fff;
  background: #140f07;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreatorName = styled.span`
  font-size: 15px;
  color: #08bbff;
  margin-left: 3px;
`;
