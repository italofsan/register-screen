import { createContext, ReactNode } from "react";
import { errorMessage, successMessage } from "../components/Messages";
import { FormData } from "../types";

type RegisterContextType = {
  addRegister: (values: FormData) => void;
};

type RegisterContextProviderProps = {
  children: ReactNode;
};

export const RegisterContext = createContext({} as RegisterContextType);

export function RegisterContextProvider({
  children,
}: RegisterContextProviderProps) {
  function addRegister(values: FormData) {
    return successMessage("Resgistro concluído com sucesso!");
  }

  return (
    <RegisterContext.Provider
      value={{
        addRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
