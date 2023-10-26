import { useContext } from "react";
import {
  ButtonArea,
  CoffeeItemContainer,
  CoffeePriceContainer,
  DivContainer,
  IncrementDecrementContainer,
  RemoveButton,
} from "./styles";


import { Minus, Plus, Trash } from "phosphor-react";
import { CoffeeListContext } from "../../../../../../contexts/CoffeListContext";


export function CoffeeListBox(props) {
  const { img, coffeeTitle, amount, index, id, price } = props
  const context = useContext(CoffeeListContext)
  const convertedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  function handleIncrement() {
    context.dispatch({ type: "INCREMENT_FILTERED_LIST", payload: id })

  }
  function handleDecrement() {
    context.dispatch({ type: "DECREMENT_FILTERED_LIST", payload: id })

  }
  function handleRemove() {
    context.dispatch({ type: 'REMOVE', payload: index })
    context.dispatch({ type: 'IS_NOT_ACTIVE', payload: id })

  }
  return (
    <CoffeeItemContainer>
      <DivContainer>
        <div>
          <img src={img} alt="" />
          <ButtonArea>
            <p>{coffeeTitle}</p>
            <div>
              <IncrementDecrementContainer>
                <button disabled={amount === 1}>
                  <Minus size={14} onClick={() => handleDecrement()} />
                </button>
                <p>{amount}</p>
                <button>
                  <Plus onClick={() => handleIncrement()} size={14} />
                </button>
              </IncrementDecrementContainer>
              <RemoveButton onClick={() => handleRemove()}>
                <Trash size={16} /> Remover
              </RemoveButton>
            </div>
          </ButtonArea>
        </div>
        <CoffeePriceContainer>
          <p>{convertedPrice.format(price)}</p>
        </CoffeePriceContainer>
        <div />
      </DivContainer>
    </CoffeeItemContainer>
  );
}
