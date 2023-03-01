import React, {useReducer} from 'react'
import reducer from './reducer' 

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const defaultState = {
        isLoading:true,
        items:[],
        cocktail:null,
        search:''
    }
    const [state,dispatch] = useReducer(reducer,defaultState)
    
    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}