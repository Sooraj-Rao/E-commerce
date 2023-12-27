import { createContext } from "react";

export const MyContext = createContext();


const Context = ({ children }) => {
    return (
        <MyContext.Provider>{children}</MyContext.Provider>
    )
}

export default Context