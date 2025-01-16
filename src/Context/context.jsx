import { createContext, useState } from "react";

export const Context = createContext()


export const TokenContext = ({children}) => {
    const [token, setToken] = useState(null)


    localStorage.setItem("token", JSON.stringify(JSON.parse(localStorage.getItem("token"))  || token))
    return(
        <Context.Provider value={{token, setToken}}>
            {children}
        </Context.Provider>
    )
}