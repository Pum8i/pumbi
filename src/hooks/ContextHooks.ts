import { AccentContext } from "src/contexts/AccentContext";
import { useContext } from "react";

export function useAccentContext() {
  return useContext(AccentContext);
}
