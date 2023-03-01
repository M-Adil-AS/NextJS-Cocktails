import React, {useState,useEffect,useContext} from 'react'
import Cocktail_UI from '../../../components/Cocktail_UI'
import {useRouter} from 'next/router'
import Loader from '../../../components/Loader'
import {AppContext} from '../../../context/appContext' 
import axios from 'axios'

const Cocktail = ()=> {
    const router = useRouter()
    const {id} = router.query
    const {state,dispatch} = useContext(AppContext)

    const fetchData = async()=>{
        const response = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {drinks} = response.data
        const drink = drinks.find(drink => drink.idDrink==id)
        dispatch({type:'itemFetch', payload:drink})
    }
    
    useEffect(()=>{
        router.isReady && fetchData()
    },[id])
    
    const getIngredients = (cocktail)=> {
        let ingredients = []
        for(const [key, value] of Object.entries(cocktail)) {
            if(key.includes('strIngredient') && value){
                ingredients.push({id:key, name:value})
            }
        }
        return ingredients
    }
    
    return (
        <>
            {state.isLoading ? <Loader/> : <Cocktail_UI getIngredients={getIngredients}/>} 
        </>
    )
}

export default Cocktail