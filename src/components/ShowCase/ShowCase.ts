import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 40px;
  color: #3a4d39;
  align-items: start;
  margin: 80px 80px 30px 140px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export const Image = styled.img`
  height: 600px;
  width: 600px;
`;

export const TextContainer = styled.div``;

export const Text = styled.p`
  font-size: 26px;
  color: #3a4d39;
  width: 600px;
`;
export const Button = styled.button`
  background-color: #3a4d39;
  color: #ece3ce;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #ece3ce;
    color: #3a4d39;
  }

  &:active {
    background-color: #ece3ce;
    color: #3a4d39;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`;
