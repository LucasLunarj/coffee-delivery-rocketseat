import styled from "styled-components";

export const CoffeeItemContainer = styled.li`
  width: 368px;
  height: 90px;
  padding: 8px 4px 8px 0;

  list-style-type: none;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const RemoveButton = styled.button`
  width: 91px;
  height: 32px;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0px 8px;
  border-radius: 6px;
  border: none;

  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  cursor: pointer;
  p {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  div {
    display: flex;
    gap: 8px;
  }
  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto";
    font-style: normal;
    line-height: 130%;
    font-weight: 400;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 4px 0px 4px;

  & div:has(img) {
    display: flex;
    gap: 20px;
  }
`;

export const IncrementDecrementContainer = styled.div`
  width: 72px;
  height: 32px;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  button{
    border: none;
    background-color: ${(props) => props.theme["base-button"]};
    height: auto;
    width: auto;
  }

  svg {
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
  &:hover {
    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

export const CoffeePriceContainer = styled.div`
  color: ${(props) => props.theme["base-text"]};
  margin-left: 30px;

  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  line-height: 130%;
  text-align: right;

  display: flex;
  gap: 4px;
`;
