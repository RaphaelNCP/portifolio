import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-left: 210px;
  margin-right: 210px;
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 60px;
  color: #3a4d39;
`;

export const About = styled.p`
  font-size: 26px;
  color: #3a4d39;
  width: 600px;
  margin-bottom: 50px;
`;

const float = keyframes`
0%, 100% {
  transform: translateY(0px) rotate(-2deg);
}
50% {
  transform: translateY(-15px) rotate(2deg);
}
`;

export const Profile = styled.img`
  height: 740px;
  width: 740px;
  margin: 20px;
  animation: ${float} 5s ease-in-out infinite;
`;

export const Tools = styled.div`
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 2px solid #3a4d39;
  border-radius: 20px;
  padding: 12px;
  margin: 0;
  width: 600px;
`;

export const ToolsTitle = styled.h2`
  font-size: 20px;
  color: #3a4d39;
  margin: 0;
  margin-bottom: 20px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;
`;

export const Linha = styled.hr`
  border: 1px solid #3a4d39;
  margin: 30px 0;
  opacity: 0.2;
`;
