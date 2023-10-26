import {
  AboutContainer,
  BackgroundContainer,
  CoffeeContainer,
  PackageContainer,
  ShoppingCartContainer,
  TimerContainer,
} from "./styles";
import coffee from "../../../../assets/cofee-logo.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
export function Background() {
  return (
    <div>
      <BackgroundContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <AboutContainer>
            <div>
              <ShoppingCartContainer>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <p>Compra Simples e Segura</p>
              </ShoppingCartContainer>
              <TimerContainer>
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </TimerContainer>
            </div>
            <div>
              <PackageContainer>
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </PackageContainer>
              <CoffeeContainer>
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </CoffeeContainer>
            </div>
          </AboutContainer>
        </div>
        <img src={coffee} alt="" />
      </BackgroundContainer>
    </div>
  );
}
