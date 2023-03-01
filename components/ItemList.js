import React,{useContext} from 'react'
import Item from '../components/Item'
import styles from '../styles/ItemList.module.css'
import {AppContext} from '../context/appContext'

const ItemList = ()=>{
    const {state,dispatch} = useContext(AppContext)
    return (
        <>
            {(!state.items) ? <h2 className='center'>No cocktails matched your search criteria</h2> : 
            <div>
                <h2 className='center'>Cocktails</h2>
                <div className={styles.itemList}>
                    {state.items.map((item)=>{
                    return (
                        <Item key={item.idDrink} {...item}/>
                    )
                    })}
                </div>
            </div>}
        </>
    )
}

export default ItemList