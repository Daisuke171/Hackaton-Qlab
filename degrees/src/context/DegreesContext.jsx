import { createContext, useEffect, useState } from "react";

export const DegreeContext = createContext();

export const DegreesProvider = ({ children }) => {
    const [degrees, setDegrees] = useState([])

    useEffect(() => {
        const getData = async() => {
            try{
                const res = await fetch("/api/degrees")
                const data = await res.json()
                setDegrees(data)
            }
            catch(error){
                console.log(error)
            }
        }

        getData()
    },[])

    return(
        <DegreeContext.Provider value={{degrees, setDegrees}}>
            {children}
        </DegreeContext.Provider>
    )
}