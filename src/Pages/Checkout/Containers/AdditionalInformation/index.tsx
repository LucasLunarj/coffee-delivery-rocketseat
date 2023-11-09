import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  AdditionalInformationContainer,
  AddressInformationContainer,
  AddressTitleContainer,
  FormContainer,
  InformationContainer,
  PaymentMethodTitleContainer,
  PaymentOptionContainer,
  SelectPaymentMethodContainer,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CoffeeListContext } from "../../../../contexts/CoffeListContext";

export function AdditionalInformation() {
  const context = useContext(CoffeeListContext);
  const { register } = useFormContext();
  function handleSelectPaymentMethod(payment: string) {
    context?.dispatch({ type: "PAYMENT_METHOD", payload: payment });
    const test = document.querySelector(".money");
    console.log(test, "test");
  }

  if (context?.state.paymentMethodSelected === "Cartão de Crédito") {
    document.querySelector(".credit-card").style.border = "1px solid #4B2995 ";
    document.querySelector(".debit-card").style.border = "none";
    document.querySelector(".money").style.border = "none";
  }
  if (context.state.paymentMethodSelected === "Cartão de Débito") {
    document.querySelector<HTMLElement | null>(".debit-card").style.border =
      "1px solid #4B2995 ";
    document.querySelector(".credit-card").style.border = "none ";
    document.querySelector(".money").style.border = "none ";
  }
  if (context?.state.paymentMethodSelected === "Dinheiro") {
    document.querySelector(".money").style.border = "1px solid #4B2995 ";
    document.querySelector(".debit-card").style.border = "none";
    document.querySelector(".credit-card").style.border = "none ";
  }

  return (
    <InformationContainer>
      <AdditionalInformationContainer>
        <h2>Complete seu pedido</h2>
        <AddressInformationContainer>
          <AddressTitleContainer>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitleContainer>

          <FormContainer>
            <input
              type="text"
              id=""
              placeholder="CEP"
              inputMode="numeric"
              maxLength={9}
              {...register("cep", { valueAsNumber: true, maxLength: 8 })}
            />

            <input
              type="text"
              id=""
              placeholder="Rua"
              {...register("street")}
            />
            <div>
              <input
                type="text"
                id=""
                placeholder="Número"
                {...register("number", { valueAsNumber: true })}
              />
              <input
                type="text"
                id=""
                placeholder="Complemento"
                {...register("complemento")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                {...register("neighboorhood")}
              />
              <input type="text" placeholder="Cidade" {...register("city")} />
              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                {...register("uf")}
              />
            </div>
          </FormContainer>
        </AddressInformationContainer>
      </AdditionalInformationContainer>
      <SelectPaymentMethodContainer>
        <div>
          <PaymentMethodTitleContainer>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O Pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentMethodTitleContainer>
          <PaymentOptionContainer>
            <div
              className="credit-card"
              onClick={() => handleSelectPaymentMethod("Cartão de Crédito")}
            >
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </div>
            <div
              className="debit-card"
              onClick={() => handleSelectPaymentMethod("Cartão de Débito")}
            >
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </div>
            <div
              className="money"
              onClick={() => handleSelectPaymentMethod("Dinheiro")}
            >
              <Money size={16} />
              <p>Dinheiro</p>
            </div>
          </PaymentOptionContainer>
        </div>
      </SelectPaymentMethodContainer>
    </InformationContainer>
  );
}
