import React,{useContext} from 'react'
import Link from 'next/link'
import {AppContext} from '../context/appContext' 
import styles from '../styles/Cocktail_UI.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea} from '@mui/material';
import Grid from '@mui/material/Grid';

const Cocktail_UI = ({getIngredients}) => {
    const {state,dispatch} = useContext(AppContext)

    return (
        <Grid container justifyContent="center">
            <Grid item xs={10} sm={8} md={9} lg={10}>
                <Card sx={{width:'100%', m:'auto', my:3, }} className={`${styles.cocktail} center`}>
                    <CardActionArea>
                        <br/>
                        <Link href="/" passHref>
                            <Button size="small" color="primary">Back to Home</Button>
                        </Link>
                        <br/><br/>
                        <CardMedia
                            component="img"
                            image={state.cocktail.strDrinkThumb}
                            alt="drink"
                            height='200'
                            sx={{objectFit: "contain", width:'90%', m:'auto'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>Name: {state.cocktail.strDrink}</b>
                        </Typography>
                        <Typography sx={{mt:1}} variant="body1">
                            Category: {state.cocktail.strCategory}
                        </Typography>
                        <Typography sx={{mt:1}} variant="body1">
                            Info: {state.cocktail.strAlcoholic}
                        </Typography>
                        <Typography sx={{mt:1}} variant="body1">
                            Glass: {state.cocktail.strGlass}
                        </Typography>
                        <Typography sx={{mt:1}} variant="body1">
                            Instructions: {state.cocktail.strInstructions}
                        </Typography>
                        <Typography sx={{mt:1}} variant="body1">
                            Ingredients: {getIngredients(state.cocktail).map((ingredient)=>
                                <span key={ingredient.id}>{ingredient.name}, </span>
                            )}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

        
    )
}

export default Cocktail_UI