import styled from "styled-components";
import { keyframes } from "styled-components";

const spinLogoAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Main = styled.div`
  text-align: center;
  background-color: Salmon;
  height: 100vh;
`;

export const Logo = styled.img`
  animation: ${spinLogoAnimation} infinite 20s linear;
  height: 80px;
`;

export const Header = styled.div`
  background-color: PapayaWhip;
  height: 150px;
  padding: 20px;
  color: rgb(185, 66, 98);
`;

export const Intro = styled.p`
  font-size: large;
`;
