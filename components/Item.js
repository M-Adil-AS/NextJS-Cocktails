import React,{useContext} from 'react'
import styles from '../styles/Item.module.css'
import {AppContext} from '../context/appContext'
import Link from 'next/link'

const Item = ({strGlass,strDrink,strAlcoholic,strDrinkThumb,idDrink})=>{
    const {state,dispatch} = useContext(AppContext)
    return(
        <div className={styles.item}>
                <img src={strDrinkThumb}/>
                <h2>{strDrink}</h2>
                <p>{strGlass}</p>
                <p>{strAlcoholic}</p>
                <Link href={`/cocktail/${idDrink}`} onClick={()=>dispatch({type:'pageChange'})}>Details</Link>
                <br/><br/>
        </div>
    )
}

export default Item