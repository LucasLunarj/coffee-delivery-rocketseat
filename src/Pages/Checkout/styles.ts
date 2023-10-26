import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
  }
  @media (max-width: 600px) {
    form {
      flex-direction: column;
      /* margin-left: 50px;
   margin-right: 40px; */
      margin: 0 40px 0 40px;
    }
  }
  gap: 32px;
`;
