import { CoffeeBox } from "./Components/CoffeeBox";
import { Background } from "./components/Background";
import { CoffeeItems, CoffeeListContainer, HomeContainer } from "./styles";

import { useContext } from "react";
import { CoffeeListContext } from "../../contexts/CoffeListContext";
import { coffeeItensType } from "../../data/data";

export function Home() {
  const context = useContext(CoffeeListContext);

  return (
    <HomeContainer>
      <Background />

      <CoffeeListContainer>
        <div>
          <h1>Nossos cafés</h1>
        </div>
        <CoffeeItems>
          {context?.state.list.map((item: coffeeItensType) => (
            <CoffeeBox key={item.id} {...item} />
          ))}
        </CoffeeItems>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
