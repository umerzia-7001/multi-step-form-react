import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IFormData } from "../types/modules/form";

const initialData: any = {
  make: "AUDI",
  colour: "BlUE",
  code: "",
};

interface FormContextProps {
  data: any;
  setFormValues: Dispatch<SetStateAction<any>>;
}

export const FormContext = createContext<FormContextProps>({
  data: initialData,
  setFormValues: () => {
    // eslint-disable-next-line no-empty-function
  },
});

interface FormProviderProps {
  children: ReactNode;
}

export default function FormProvider({
  children,
}: FormProviderProps): JSX.Element {
  const [data, setData] = useState<any>(initialData);

  const setFormValues = (values: any) => {
    setData((prevValues: any) => ({
      ...prevValues,
      ...values,
    }));
  };

  const value: FormContextProps = { data, setFormValues };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export const useFormData = (): FormContextProps => useContext(FormContext);
