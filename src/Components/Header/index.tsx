import {
  HeaderContainer,
  LocationContainer,
  CartItemsAmount,
  MenuContainer,
} from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CoffeeListContext } from "../../contexts/CoffeListContext";
import { dataStates } from "../../data/dataStates";
import { CoffeDataType, coffeItensType } from "../../data/data";

export function Header() {
  const context = useContext(CoffeeListContext);

  const [states, setStates] = useState(dataStates);
  const [selectedState, setSelectedState] = useState([
    { state: "Rio de Janeiro", uf: "RJ" },
  ]);
  const [switchChart, setSwitchChart] = useState<boolean>(false);

  function handleOpenCloseMenu() {
    context.dispatch({
      type: "OPEN_AND_CLOSE_MENU",
      payload: !context.state.menuSwitcher,
    });
  }
  function handleCloseMenuAndSelectState(id: string) {
    context.dispatch({ type: "OPEN_AND_CLOSE_MENU", payload: false });
    setSelectedState(states.filter((item) => item.id === id));
  }
  function handleConvert(id: string) {
    if (switchChart === false && context.state.filteredList.length > 1) {
      context.dispatch({ type: "CONVERT_FILTERED_TO_OBJECT", payload: id });
    }
    setSwitchChart(true);
  }
  console.log(switchChart);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" onClick={() => setSwitchChart(false)} />
      </NavLink>
      <div>
        <LocationContainer onClick={() => handleOpenCloseMenu()}>
          <MapPin weight="fill" size={22} />
          <p>{`${selectedState[0].state}, ${selectedState[0].uf} `}</p>
        </LocationContainer>
        {context.state.menuSwitcher === true ? (
          <MenuContainer>
            {states.map((item) => {
              return (
                <div
                  onClick={() => handleCloseMenuAndSelectState(item.id)}
                  key={item.id}
                >
                  {item.state}
                </div>
              );
            })}
          </MenuContainer>
        ) : null}
        <div>
          <NavLink
            to="/checkout"
            onClick={() => handleConvert(context.state.filteredList.id)}
          >
            <button disabled={switchChart}>
              <ShoppingCart weight="fill" size={22} />
            </button>
          </NavLink>
          <CartItemsAmount>
            <p>{context.state.filteredList.length}</p>
          </CartItemsAmount>
        </div>
      </div>
    </HeaderContainer>
  );
}
