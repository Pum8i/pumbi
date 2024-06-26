import React, { createContext, useState } from "react";

interface IData {
  children: React.ReactNode;
}

type IAccentContext = {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
};

export const AccentContext = createContext<IAccentContext>({
  accentColor: "#1f3864",
  setAccentColor: () => null,
});

export const AccentContextProvider = ({ children }: IData) => {
  const [accentColor, setAccentColor] = useState<string>("#1f3864");

  return (
    <AccentContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </AccentContext.Provider>
  );
};
