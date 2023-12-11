"use client";

import { 
  useState, 
  useEffect, 
  useContext, 
  createContext, 
  SetStateAction, 
  Dispatch
} from "react";

interface ILanguageDataObject {
  [key: string]: any
}

interface ContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  pageLanguageData: any//ILanguageDataObject[] | //ILanguageDataObject;
  globalLanguageData: any//ILanguageDataObject[] | //ILanguageDataObject;
}


export const LanguageContext = createContext<ContextProps>({} as ContextProps);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  let currentLanguage;
  if (typeof window !== "undefined") {
    currentLanguage = localStorage.getItem("selectedLanguage") 
  }
  const [language, setLanguage] = useState(currentLanguage|| "en")
  const [pageLanguageData, setPageLanguageData] = useState<any>()
  const [globalLanguageData, setGlobalLanguageData] = useState<any>()

  const serverUrl = 'http://127.0.0.1:4000';

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("selectedLanguage", language);
  }, [language])

  useEffect(() => {
    const fetchGlobalLanguage = async() => {
      const selectedLanguage = localStorage.getItem("selectedLanguage")
      await fetch(`${serverUrl}/global?locale=${selectedLanguage}`)
      .then(response => response.json())
      .then(data => {
        const { helpText, copyright, menu, social, footerMenu } = data;
        setGlobalLanguageData([menu, social, footerMenu, helpText, copyright])
      })
      .catch(err => console.error(err))
    }
    fetchGlobalLanguage()
  }, [language]);

  useEffect(() => {
    const fetchPageLanguage = async() => {
      const selectedLanguage = localStorage.getItem("selectedLanguage")
      await fetch(`${serverUrl}/pages?locale=${selectedLanguage}`)
      .then(response => response.json())
      .then(data => {        
        const [{ contentSections }] = data
        const [heroSection, featureSection, modulesSection, ctaSection] = contentSections;        
        setPageLanguageData([heroSection, featureSection, modulesSection, ctaSection])       
      })
      .catch(err => console.error(err))
    }
    fetchPageLanguage()
  }, [language]);

  if(!globalLanguageData || !pageLanguageData) {
    return <></>
  }

  return (
    <LanguageContext.Provider value={{language, setLanguage, pageLanguageData, globalLanguageData}}>
      { children }
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
}

export { LanguageProvider, useLanguage };