import React, { createContext, useState } from "react";

interface IData {
  children: React.ReactNode;
}

type ITechSkillsContext = {
  skillGrouping: string;
  setSkillGrouping: React.Dispatch<React.SetStateAction<string>>;
  showCompanySkills: boolean;
  setShowCompanySkills: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TechSkillsContext = createContext<ITechSkillsContext>({
  skillGrouping: "none",
  setSkillGrouping: () => null,
  showCompanySkills: false,
  setShowCompanySkills: () => null,
});

export const TechSkillsContextProvider = ({ children }: IData) => {
  const [skillGrouping, setSkillGrouping] = useState<string>("none");
  const [showCompanySkills, setShowCompanySkills] = useState<boolean>(false);

  return (
    <TechSkillsContext.Provider
      value={{
        skillGrouping,
        setSkillGrouping,
        showCompanySkills,
        setShowCompanySkills,
      }}
    >
      {children}
    </TechSkillsContext.Provider>
  );
};
