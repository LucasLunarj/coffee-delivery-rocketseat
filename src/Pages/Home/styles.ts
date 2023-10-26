import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  flex-direction: column;

  @media (max-width: 600px) {
    padding: 0 20px 0 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const CoffeeListContainer = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-self: baseline;
    margin-bottom: 54px;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 32px;
    font-weight: 800;
  }
`;

export const CoffeeItems = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0fr 0fr 0fr;
  grid-template-rows: 0.1fr 0.1fr;
  grid-gap: 40px 32px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* grid-gap: 32px; */
  height: 100%;
  width: 100%;

  padding: 0px 160px 32px 160px;

  @media (max-width: 600px) {
    grid-column: auto;
    grid-template-columns: 0.1fr;
  }
`;
