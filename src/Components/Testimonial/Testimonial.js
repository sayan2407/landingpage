import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import "../Choose/Choosecard.css";

const  Testimonial = () => {

    const cardContent = [
        {
            id: 1,
            name: "Ceo of Hunt",
            msg: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
        },
        {
            id: 2,
            name: "Ceo of Hunt",
            msg: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
        },
        {
            id: 3,
            name: "Ceo of Hunt",
            msg: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
        },
    ]
  return <div className='container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>What say's our happy clients?</h2>
                <div>
                    <ArrowCircleLeftIcon style={{color: 'white'}}/>
                    <ArrowCircleRightIcon style={{color: 'white'}}/>

                </div>
    </div>
  <div className='choose_container'>

    {
        cardContent.map(item=>{
            return  <Card style={{backgroundColor: 'black', color:'white', display: 'flex', flexDirection: 'column'}} key={item.key} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Avatar alt="Remy Sharp" src="../../assets/images/avatar.png" />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                    </Typography>
                    <Typography style={{color: 'white'}} variant="body2" color="text.secondary">
                    {item.msg}
                    </Typography>
                </CardContent>
            </CardActionArea>
        
          </Card>
        })
    }
    </div>

  </div>
   
  
}

export default Testimonial;
