import { v4 as uuidv4 } from "uuid";

interface dataStatesType {
  state: string;
  uf: string;
  id: string;
}

interface AllDataTypes {
  dataStates: Array<dataStatesType>;
}

export const dataStates: AllDataTypes = [
  { state: "Acre", uf: "AC", id: uuidv4() },
  { state: "Alagoas", uf: "AL", id: uuidv4() },
  { state: "Amapá", uf: "AP", id: uuidv4() },
  { state: "Amazonas", uf: "AM", id: uuidv4() },
  { state: "Bahia", uf: "BA", id: uuidv4() },
  { state: "Ceará", uf: "CE", id: uuidv4() },
  { state: "Distrito Federal", uf: "DF", id: uuidv4() },
  { state: "Espirito Santo", uf: "ES", id: uuidv4() },
  { state: "Goiás", uf: "GO", id: uuidv4() },
  { state: "Maranhão", uf: "MA", id: uuidv4() },
  { state: "Mato Grosso", uf: "MT", id: uuidv4() },
  { state: "Mato Grosso do Sul", uf: "MS", id: uuidv4() },
  { state: "Minas Gerais", uf: "MG", id: uuidv4() },
  { state: "Pará", uf: "PA", id: uuidv4() },
  { state: "Paraíba", uf: "PB", id: uuidv4() },
  { state: "Paraná", uf: "PR", id: uuidv4() },
  { state: "Pernambuco", uf: "PE", id: uuidv4() },
  { state: "Piauí", uf: "PI", id: uuidv4() },
  { state: "Rio de Janeiro", uf: "RJ", id: uuidv4() },
  { state: "Rio Grande do Norte", uf: "RN", id: uuidv4() },
  { state: "Rio Grande do Sul", uf: "RS", id: uuidv4() },
  { state: "Rondônia", uf: "RO", id: uuidv4() },
  { state: "Roraima", uf: "RR", id: uuidv4() },
  { state: "Santa Catarina", uf: "SC", id: uuidv4() },
  { state: "São Paulo", uf: "SP", id: uuidv4() },
  { state: "Sergipe", uf: "SE", id: uuidv4() },
  { state: "Tocantins", uf: "TO", id: uuidv4() },
];
