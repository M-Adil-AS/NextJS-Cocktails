import React,{useContext} from 'react'
import Item from '../components/Item'
import styles from '../styles/ItemList.module.css'
import {AppContext} from '../context/appContext'
import Typography from '@mui/material/Typography';

const ItemList = ()=>{
    const {state,dispatch} = useContext(AppContext)
    return (
        <>
            {(!state.items) ? <h2 className='center'>No cocktails matched your search criteria</h2> : 
            <div>
                <Typography sx={{mx: 3, my:2, fontWeight: 'fontWeightLight'}} className='center' variant="h5" component="h4">
                    <b>Cocktails</b>
                </Typography>
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