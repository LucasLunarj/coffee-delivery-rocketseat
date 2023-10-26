import styled from "styled-components";

export const SelectedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 115px;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};

    font-family: "Baloo 2";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  @media (max-width: 600px) {
    margin-top: 0;
    padding-left: 10px;
    h2 {
      text-align: center;
    }
  }
`;

export const CoffeeChartListContainer = styled.div`
  width: 448px;
  min-height: 498px;
  height: auto;
  padding: 40px;

  border-radius: 6px 44px;

  background: ${(props) => props.theme["base-card"]};
`;

export const CoffeeList = styled.ul`
  display: flex;

  flex-direction: column;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme["base-button"]};
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const PriceAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-family: "Roboto";
  font-weight: 400;
  line-height: 160%;
  font-style: normal;
  color: ${(props) => props.theme["base-text"]};
`;

export const ConfirmButton = styled.button`
  padding: 12px 8px 12px 8px;
  margin-top: 24px;

  width: 100%;
  text-align: center;
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme["white"]};
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  background-color: ${(props) => props.theme["yellow"]};

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    cursor: pointer;
  }
`;

const PriceAreaBase = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  font-style: normal;
`;

export const TotalAmountItems = styled(PriceAreaBase)`
  font-size: 14px;
  font-weight: 400;
`;

export const DeliveryPrice = styled(PriceAreaBase)`
  font-size: 14px;
  font-weight: 400;
`;

export const TotalPrice = styled(PriceAreaBase)`
  font-size: 20px;
  font-weight: 700;
`;
