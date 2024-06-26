import { AccentContext } from "src/contexts/AccentContext";
import { useContext } from "react";
import { TechSkillsContext } from "src/contexts/TechSkillsContext";

export function useAccentContext() {
  return useContext(AccentContext);
}

export function useTechSkillsContext() {
  return useContext(TechSkillsContext);
}
