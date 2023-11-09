import { v4 as uuidv4 } from "uuid";
//Photos
import traditionalCoffee from "../assets/Coffee-Pictures/Type=Expresso.png";
import AmericanCoffee from "../assets/Coffee-Pictures/type=AmericanExpresso.png";
import CreammyCoffee from "../assets/Coffee-Pictures/creamyExpresso.png";
import coldCoffee from "../assets/Coffee-Pictures/frozenExpresso.png";
import CoffeeWithMilk from "../assets/Coffee-Pictures/CoffeeWithMilk.png";
import Latte from "../assets/Coffee-Pictures/Latte.png";
import Capuccino from "../assets/Coffee-Pictures/cappuccino.png";
import Macchiatto from "../assets/Coffee-Pictures/Macchiato.png";
import Mocaccino from "../assets/Coffee-Pictures/Mocaccino.png";
import hotChocolate from "../assets/Coffee-Pictures/hotChocolate.png";
import Cuban from "../assets/Coffee-Pictures/Cubano.png";
import Hawaiian from "../assets/Coffee-Pictures/Hawaiian.png";
import Arabic from "../assets/Coffee-Pictures/Arabic.png";
import Irish from "../assets/Coffee-Pictures/Irish.png";

export interface coffeeItensType {
  id: string;
  img: string;
  coffeeTitle: string;
  typeOfCoffee: string[];
  coffeeDescription: string;
  price: number;
  amount: number;
  active: boolean;
}

export type CoffeeDataType = {
  list: coffeeItensType[];
  filteredList: coffeeItensType[];
  menuSwitcher: boolean;
  deliveryInformation: object;
  paymentMethodSelected: string;
};

export const CoffeeItens: CoffeeDataType = {
  list: [
    {
      id: uuidv4(),
      img: traditionalCoffee,
      coffeeTitle: "Expresso Tradicional",
      typeOfCoffee: ["tradicional"],
      coffeeDescription:
        "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: AmericanCoffee,
      coffeeTitle: "Expresso Americano",
      typeOfCoffee: ["tradicional"],
      coffeeDescription: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: CreammyCoffee,
      coffeeTitle: "Expresso Cremoso",
      typeOfCoffee: ["tradicional"],
      coffeeDescription: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: coldCoffee,
      coffeeTitle: "Expresso Gelado",
      typeOfCoffee: ["tradicional", "gelado"],
      coffeeDescription: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: CoffeeWithMilk,
      coffeeTitle: "Café com Leite",
      typeOfCoffee: ["tradicional", "com leite"],
      coffeeDescription:
        "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Latte,
      coffeeTitle: "Latte",
      typeOfCoffee: ["tradicional", "com leite"],
      coffeeDescription:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa ",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Capuccino,
      coffeeTitle: "Capuccino",
      typeOfCoffee: ["tradicional", "com leite"],
      coffeeDescription:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Macchiatto,
      coffeeTitle: "Macchiato",
      typeOfCoffee: ["tradicional", "com leite"],
      coffeeDescription:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Mocaccino,
      coffeeTitle: "Mocaccino",
      typeOfCoffee: ["tradicional", "com leite"],
      coffeeDescription:
        "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: hotChocolate,
      coffeeTitle: "Chocolate Quente",
      typeOfCoffee: ["especial", "com leite"],
      coffeeDescription:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Cuban,
      coffeeTitle: "Cubano",
      typeOfCoffee: ["especial", "Alcoólico", "gelado"],
      coffeeDescription:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Hawaiian,
      coffeeTitle: "Havaiano",
      typeOfCoffee: ["especial"],
      coffeeDescription: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Arabic,
      coffeeTitle: "Árabe",
      typeOfCoffee: ["especial"],
      coffeeDescription:
        "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
      amount: 1,
      active: false,
    },
    {
      id: uuidv4(),
      img: Irish,
      coffeeTitle: "Irlandês",
      typeOfCoffee: ["especial", "Alcoólico"],
      coffeeDescription:
        "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
      amount: 1,
      active: false,
    },
  ],
  filteredList: [],

  menuSwitcher: false,

  deliveryInformation: {},

  paymentMethodSelected: "",
};
