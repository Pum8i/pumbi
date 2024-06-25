import React, { createContext, useState } from "react";

interface IData {
  children: React.ReactNode;
}

type IAccentContext = {
  accentColor: string | undefined;
  setAccentColor: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const AccentContext = createContext<IAccentContext>({
  accentColor: undefined,
  setAccentColor: () => null,
});

export const AccentContextProvider = ({ children }: IData) => {
  const [accentColor, setAccentColor] = useState<string | undefined>();

  return (
    <AccentContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </AccentContext.Provider>
  );
};
