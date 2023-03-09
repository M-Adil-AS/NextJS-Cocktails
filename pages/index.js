import Head from 'next/head';
import React,{useContext,useEffect} from 'react'
import ItemList from '../components/ItemList'
import Loader from '../components/Loader'
import {AppContext} from '../context/appContext'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
                
                <Grid container justifyContent="center">
                    <Grid item sx={{minWidth: '190px'}} xs={8} sm={6} md={5} lg={4}>
                        <TextField id="outlined-basic" variant="outlined" size='small' color='primary' value={state.search} onChange={(e)=>dispatch({type:'search',payload:e.target.value})} fullWidth/>
                    </Grid>
                </Grid>
                <br/><br/>
            </div>
            
            {!state.isLoading ? <ItemList/> : <Loader/>}
            <br/><br/>
        </>
    )
}

export default Home