import Head from 'next/head';
import React,{useContext,useEffect} from 'react'
import ItemList from '../components/ItemList'
import Loader from '../components/Loader'
import {AppContext} from '../context/appContext'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Home = ()=> {
    const {state,dispatch} = useContext(AppContext)
    
    const fetchData = async()=>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.search}`)
        const {drinks} = await response.json()
        dispatch({type:'itemsFetch', payload:drinks})
    }
    
    useEffect(()=>{
        fetchData()
    },[state.search])
    
    return (
        <>
            <Head>
              <title>Home Page</title>
            </Head>

            <div className='center'>
                <Typography sx={{m: 3, fontWeight: 'fontWeightLight'}} variant="h5" component="h4">
                    <b>Search favorite cocktail</b>
                </Typography>
                <TextField id="outlined-basic" variant="outlined" size='small' sx={{mx: 3}} color='primary' value={state.search} onChange={(e)=>dispatch({type:'search',payload:e.target.value})}/>
                <br/><br/>
            </div>
            
            {!state.isLoading ? <ItemList/> : <Loader/>}
            <br/><br/>
        </>
    )
}

export default Home