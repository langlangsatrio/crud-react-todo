"use client";

import { ReactNode, useState } from "react";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { createContext } from "react";
import exp from "constants";

//Context  config (interface)
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

interface ILanguageProviderProps {
  children: ReactNode;
}

//useContext
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

const LanguageProvider: React.FC<ILanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
