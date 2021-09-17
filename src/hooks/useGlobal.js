import { useContext } from "react"
import { GlobalContect } from "../context/Provider"

const useGlobal = () => {
    return useContext(GlobalContect)
}

export default useGlobal
