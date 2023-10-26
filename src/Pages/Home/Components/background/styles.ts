import styled from "styled-components";

export const BackgroundContainer = styled.div`
  max-width: 100%;
  margin-top: 175px;
  gap: 30px;
  justify-content: center;
  align-items: center;
  display: flex;

  h1 {
    max-width: 588px;
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", cursive;
    font-size: 48px;
    line-height: 140%;
    font-weight: 800;
    margin-bottom: 16px;
  }

  p {
    max-width: 588px;

    color: ${(props) => props.theme["base-subtitle"]};

    font-size: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin-top: 66px;
  gap: 40px;

  @media (max-width: 600px) {
    gap: 0;
    margin-top: 50px;
  }
`;

const baseItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme["white"]};
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
`;

export const ShoppingCartContainer = styled(baseItem)`
  div {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
export const TimerContainer = styled(baseItem)`
  margin-top: 28px;

  div {
    background-color: ${(props) => props.theme["yellow"]};
  }
`;
export const PackageContainer = styled(baseItem)`
  div {
    background-color: ${(props) => props.theme["base-text"]};
  }
`;
export const CoffeeContainer = styled(baseItem)`
  margin-top: 28px;

  div {
    background-color: ${(props) => props.theme["purple"]};
  }
`;
