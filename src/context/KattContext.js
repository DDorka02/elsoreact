import { createContext, useState } from "react";
export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
    const [kivalasztottLista,setKivalsztottLista]=useState([])
    function katt(adat){
      console.log("app",adat)
      const ujLista=[...kivalasztottLista]
      ujLista.push(adat)
      setKivalsztottLista([...ujLista])
      console.log(kivalasztottLista)
    }  
  return (
    <KattContext.Provider value={{ kivalasztottLista, katt }}>
      {children}
    </KattContext.Provider>
  );
}