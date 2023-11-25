import styled from "styled-components";

export const Container = styled.div`
  background-color: #3a4d39;
  padding: 20px 100px;
  align-items: space-between;
  display: flex;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  color: #ece3ce;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const Option = styled.h3`
  color: #ece3ce;
  font-size: 24px;
  margin-right: 40px;

  &:hover {
    background-color: #3a4d39;
    color: #fff;
    cursor: pointer;
  }

  &:active {
    background-color: #3a4d39;
    color: #fff;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
