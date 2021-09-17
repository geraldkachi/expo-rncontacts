import React, { createContext, useReducer } from "react"
import authInitialState from "./initialStates/authInitialState"
import contactsInitialStates from "./initialStates/contactsInitialStates"
import auth from "./reducers/auth"
import contacts from "./reducers/contacts"

export const GlobalContect = createContext({})

export const GlobalProvider = ({ children }) => {

    // const [state, dispatch] = useReducer(reducer, initialStates)
    // const [state, dispatch] = useReducer(reducer, {})
    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialStates)

    return (
        <GlobalContect.Provider value={{ authState, authDispatch, contactsState, contactsDispatch }} >
            {children}
        </GlobalContect.Provider>
    )
}

 