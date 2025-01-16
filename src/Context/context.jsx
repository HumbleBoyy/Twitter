import { createContext, useState } from "react";

export const Context = createContext()


export const TokenContext = ({children}) => {
    const [token, setToken] = useState(null)


    localStorage.setItem("token", JSON.stringify(token))
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}