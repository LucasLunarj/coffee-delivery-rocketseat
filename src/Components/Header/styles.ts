import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px 32px 160px;
  height: 104px;
  background: ${(props) => props.theme["base-card"]};

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 999px;
  div {
    display: flex;
    gap: 4px;
  }

  & button {
    color: ${(props) => props.theme["yellow-dark"]};
    width: 38px;
    height: 38px;
    border: none;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 6px;
    cursor: pointer;
  }

  & button:hover {
    color: ${(props) => props.theme["yellow-dark"]};
  }
  @media (max-width: 600px) {
    padding: 0;
    justify-content: center;
    gap: 30px;
  }
`;

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  padding: 8px;
  height: 38px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  p {
    color: ${(props) => props.theme["purple-dark"]};
    font-family: "Roboto", sans - serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme["purple"]};
    position: relative;
  }
`;

export const CartItemsAmount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin-left: 27px;
  margin-top: -9px;

  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.72px;

  p {
  }
`;

export const MenuContainer = styled.div`
  margin-top: 45px;
  width: 170px;
  height: 300px;
  position: absolute;
  background: ${(props) => props.theme["base-input"]};
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  &::-webkit-scrollbar {
    display: none;
  }

  div {
    width: 100%;
    height: 100%;

    font-family: "Roboto";
    font-weight: 400;

    padding-left: 10px;
    padding-bottom: 2px;
    margin-bottom: 3px;

    cursor: pointer;
    user-select: none;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
