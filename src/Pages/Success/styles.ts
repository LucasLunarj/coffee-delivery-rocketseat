import styled from "styled-components";

export const SuccessOrderContainer = styled.div`
  margin: 184px 160px 0 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  img {
    max-width: 462px;
    max-height: 293px;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    img {
      height: auto;
      width: 100%;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
  h2 {
    font-family: "Baloo 2";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};

    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 526px;
  height: 270px;

  border: 1px solid black;
  border-radius: 6px 36px;

  padding: 40px;
  @media screen {
    height: auto;
    width: auto;
  }
`;

const BaseContent = styled.div`
  display: flex;
  gap: 12px;

  p {
    color: ${(props) => props.theme["base-text"]};

    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme["white"]};
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 100%;
  }

  span {
    font-weight: 700;
  }
`;

export const AddressAreaContainer = styled(BaseContent)`
  svg {
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const DeliveryTimerContainer = styled(BaseContent)`
  svg {
    background-color: ${(props) => props.theme["yellow"]};
  }
`;

export const PaymentMethodContainer = styled(BaseContent)`
  svg {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
