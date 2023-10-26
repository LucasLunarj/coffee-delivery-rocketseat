import { useContext, useState } from "react";
import { CoffeeListBox } from "./component/CoffeeListBox";
import {
  CoffeeChartListContainer,
  CoffeeList,
  ConfirmButton,
  DeliveryPrice,
  Divider,
  PriceAreaContainer,
  SelectedProductsContainer,
  TotalAmountItems,
  TotalPrice,
} from "./styles";
import { CoffeeListContext } from "../../../../contexts/CoffeListContext";
import { NavLink } from "react-router-dom";
import { useFormContext } from "react-hook-form";

export function SelectedProducts() {
  const context = useContext(CoffeeListContext);
  const { handleSubmit } = useFormContext();
  const { state } = context;
  const convertedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const total = state.filteredList.reduce((accumulator, current) => {
    return accumulator + current.price;
  }, 0);
  console.log(state.filteredList.length);
  return (
    <SelectedProductsContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeChartListContainer>
        <CoffeeList>
          {state.filteredList?.map((item, index) => (
            <CoffeeListBox key={item.id} index={index} {...item} />
          ))}

          <Divider />
          <PriceAreaContainer>
            <TotalAmountItems>
              <p>Total de itens</p>
              <p>{convertedPrice.format(total)}</p>
            </TotalAmountItems>
            <DeliveryPrice>
              <p>Entrega</p>
              <div>
                {state.filteredList.length > 0 ? (
                  <p>{convertedPrice.format(3.5)}</p>
                ) : (
                  <p>{convertedPrice.format(0)}</p>
                )}
              </div>
            </DeliveryPrice>
            <TotalPrice>
              <p>Total</p>
              <div>
                {state.filteredList.length > 0 ? (
                  <p>{convertedPrice.format(total + 3.5)}</p>
                ) : (
                  <p>{convertedPrice.format(0)}</p>
                )}
              </div>
            </TotalPrice>
          </PriceAreaContainer>
          <NavLink to={"/success"}>
            <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
          </NavLink>
        </CoffeeList>
      </CoffeeChartListContainer>
    </SelectedProductsContainer>
  );
}
