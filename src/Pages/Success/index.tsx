import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  AddressAreaContainer,
  DeliveryTimerContainer,
  InfoContainer,
  PaymentMethodContainer,
  SuccessOrderContainer,
  TitleContainer,
} from "./styles";
import illustration from "../../assets/Illustration.png";
import { useContext } from "react";
import { CoffeeListContext } from "../../contexts/CoffeListContext";

export function Success() {
  const context = useContext(CoffeeListContext);
  const { state } = context;
  console.log(context.state, "success");
  return (
    <SuccessOrderContainer>
      <div>
        <TitleContainer>
          <h2>Uhu! Pedido Confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você </p>
        </TitleContainer>
        <InfoContainer>
          <AddressAreaContainer>
            <MapPin size={16} weight="fill" />
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {context.state.deliveryInformation.street},{" "}
                  {context.state.deliveryInformation.number}
                </span>
              </p>
              <p>{`${state.deliveryInformation.neighboorhood}- ${state.deliveryInformation.city}, ${state.deliveryInformation.uf}`}</p>
            </div>
          </AddressAreaContainer>

          <DeliveryTimerContainer>
            <Timer size={16} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </DeliveryTimerContainer>
          <PaymentMethodContainer>
            <CurrencyDollar size={16} weight="fill" />
            <div>
              <p>Pagamento na entrega </p>
              <p>
                <span>{state.paymentMethodSelected}</span>
              </p>
            </div>
          </PaymentMethodContainer>
        </InfoContainer>
      </div>
      <img src={illustration} alt="" />
    </SuccessOrderContainer>
  );
}
