import { createContext,useState } from "react"
export const DataContext = createContext(null);

function Checkname({children}) {
  const [data,setData] = useState([]);
  return (

    <DataContext.Provider value={{data,setData}}>
      {children}
    </DataContext.Provider>
  )
}

export default Checkname