import { createContext, useContext, useState, ReactNode } from "react";

export type RegionKey = 
  | "toshkent" | "samarqand" | "buxoro" | "andijon" | "namangan" 
  | "fargona" | "nukus" | "xorazm" | "qashqadaryo" | "surxondaryo" 
  | "jizzax" | "sirdaryo" | "navoiy" | "toshkent_vil";

export const regionNames: Record<RegionKey, string> = {
  toshkent: "Toshkent",
  samarqand: "Samarqand",
  buxoro: "Buxoro",
  andijon: "Andijon",
  namangan: "Namangan",
  fargona: "Farg'ona",
  nukus: "Nukus",
  xorazm: "Xorazm (Urganch)",
  qashqadaryo: "Qashqadaryo (Qarshi)",
  surxondaryo: "Surxondaryo (Termiz)",
  jizzax: "Jizzax",
  sirdaryo: "Sirdaryo (Guliston)",
  navoiy: "Navoiy",
  toshkent_vil: "Toshkent viloyati",
};

type RegionContextType = {
  selected: RegionKey;
  setSelected: (key: RegionKey) => void;
  regionName: string;
};

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<RegionKey>("toshkent");
  return (
    <RegionContext.Provider value={{ selected, setSelected, regionName: regionNames[selected] }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error("useRegion must be used within RegionProvider");
  return ctx;
};
