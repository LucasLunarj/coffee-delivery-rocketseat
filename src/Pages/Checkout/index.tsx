import { FormProvider, useForm } from "react-hook-form";
import { AdditionalInformation } from "./Containers/AdditionalInformation";
import { SelectedProducts } from "./Containers/SelectedProducts";
import { CheckoutContainer } from "./styles";
import { useContext } from "react";
import { CoffeeListContext } from "../../contexts/CoffeListContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const FormDataSchema = z.object({
  cep: z.number(),
  street: z.string(),
  complemento: z.string().optional(),
  neighboorhood: z.string(),
  number: z.number(),
  uf: z.string().max(2),
  city: z.string(),
});
export function Checkout() {
  const context = useContext(CoffeeListContext);

  const methods = useForm({
    resolver: zodResolver(FormDataSchema),
  });

  function handleGetFormData(data: string) {
    console.log(data);
    context.dispatch({ type: "GATHERING_DATA_INFORMATION", payload: data });
  }
  return (
    <CheckoutContainer>
      <form action="" onSubmit={methods.handleSubmit(handleGetFormData)}>
        <FormProvider {...methods}>
          <AdditionalInformation />

          <SelectedProducts submit={handleGetFormData} />
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
}
