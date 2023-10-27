import styled from "styled-components";

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const AdditionalInformationContainer = styled.div`
  margin-top: 144px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};

    font-family: "Baloo 2";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  h4 {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 130%;
  }
  @media (max-width: 600px) {
    h2 {
      text-align: center;
    }
  }
`;

export const AddressInformationContainer = styled.div`
  padding: 40px;
  max-width: 100%;
  height: 372px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
  @media (max-width: 600px) {
    height: auto;
    max-height: auto;
  }
`;

export const FormContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  input {
    padding: 12px;
    background-color: ${(props) => props.theme["base-button"]};
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    color: ${(props) => props.theme["base-text"]};
    width: 100%;

    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  input::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
  input:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
  @media (max-width: 600px) {
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
    div {
      flex-direction: column;
    }
  }
`;

export const SelectPaymentMethodContainer = styled.div`
  max-width: 100%;
  max-height: 207px;
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 40px;
  background: ${(props) => props.theme["base-card"]};

  div :has(CurrencyDollar) {
    display: flex;
  }
`;

export const PaymentOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme["base-card"]};

  div {
    max-width: 178.66px;
    width: 100%;
    height: 51px;

    padding: 16px;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid transparent;

    display: flex;
    align-items: center;

    font-size: 12px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    text-transform: uppercase;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
  }

  div:hover {
    background-color: ${(props) => props.theme["purple-light"]};
  }

  /* {
    border: 1px solid ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["purple-light"]};
  } */

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

const BaseTittle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;

  svg {
    color: ${(props) => props.theme["purple"]};
    margin-bottom: 18px;
  }

  h4 {
    font-size: 16px;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const AddressTitleContainer = styled(BaseTittle)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PaymentMethodTitleContainer = styled(BaseTittle)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
