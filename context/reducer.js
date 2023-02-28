const reducer = (state,action)=>{
    if(action.type=='itemsFetch'){
        return {...state, isLoading:false, items:action.payload}
    }
    else if(action.type=='pageChange'){
        return {...state, isLoading:true}
    }
    else if(action.type=='itemFetch'){
        return {...state, cocktail:action.payload, isLoading:false}
    }
    else if(action.type=='search'){
        return {...state, isLoading:true, search:action.payload}
    }
    throw new Error('No action type matched')
}

export default reducer