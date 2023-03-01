import React,{useContext} from 'react'
import Link from 'next/link'
import {AppContext} from '../context/appContext' 
import styles from '../styles/Cocktail_UI.module.css'

const Cocktail_UI = ({getIngredients}) => {
    const {state,dispatch} = useContext(AppContext)

    return (
        <div className={`${styles.cocktail} center`}>
            <br/>
            <Link href='/'>Back to Home Page</Link>
            <br/><br/>
            <img src={state.cocktail.strDrinkThumb}/>
            <h2>Name: {state.cocktail.strDrink}</h2>
            <p>Category: {state.cocktail.strCategory}</p>
            <p>Info: {state.cocktail.strAlcoholic}</p>
            <p>Glass: {state.cocktail.strGlass}</p>
            <p>Instructions: {state.cocktail.strInstructions}</p>
            <p>Ingredients: {getIngredients(state.cocktail).map((ingredient)=>
            <span key={ingredient.id}>{ingredient.name}, </span>)}</p>
        </div>
    )
}

export default Cocktail_UI