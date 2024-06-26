import React, { createContext, useState } from "react";

interface IData {
  children: React.ReactNode;
}

type ITechSkillsContext = {
  skillGrouping: string;
  setSkillGrouping: React.Dispatch<React.SetStateAction<string>>;
};

export const TechSkillsContext = createContext<ITechSkillsContext>({
  skillGrouping: "none",
  setSkillGrouping: () => null,
});

export const TechSkillsContextProvider = ({ children }: IData) => {
  const [skillGrouping, setSkillGrouping] = useState<string>("none");

  return (
    <TechSkillsContext.Provider value={{ skillGrouping, setSkillGrouping }}>
      {children}
    </TechSkillsContext.Provider>
  );
};
