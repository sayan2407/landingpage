import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import "./Choosecard.css";

const  Choosecard = () => {

    const cardContent = [
        {
            id: 1,
            title: "98% Success Rate",
            desc: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
        },
        {
            id: 2,
            title: "98% Success Rate",
            desc: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
        },
        {
            id: 3,
            title: "98% Success Rate",
            desc: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
        }
    ]
  return <div className='container choose_container'>
    {
        cardContent.map(item=>{
            return  <Card style={{backgroundColor: 'black', color:'white', display: 'flex', flexDirection: 'column'}} key={item.key} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div className='icon_container'>
                <CardGiftcardIcon style={{color: 'black'}}/>

                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                    </Typography>
                    <Typography style={{color: 'white'}} variant="body2" color="text.secondary">
                    {item.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Button style={{backgroundColor: '#E3B748', color: 'black', borderRadius: '10px'}} size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        })
    }

  </div>
   
  
}

export default Choosecard;
