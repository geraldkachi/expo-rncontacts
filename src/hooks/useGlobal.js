import { useContext } from "react"
import { GlobalContext } from "../context/Provider"

const useGlobal = () => {
    return useContext(GlobalContext)
}

export default useGlobal
