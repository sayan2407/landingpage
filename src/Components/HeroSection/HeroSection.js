


import "./HeroSection.css";
import HeroImage from "../../assets/images/hero_image.png";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';

import { Button } from "@mui/material";
const HeroSection = () => {

    return <div style={{backgroundColor: 'black'}}>
        <div className="container hero_container">
        <div className="hero_container_child">
            <h1>You don’t have to <br/>
Fight them Alone.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 320, borderRadius: '10px' }}
                >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <EmailIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter your address"
                    inputProps={{ 'aria-label': 'search google maps' }}
                 />
                 <Button style={{color: 'black', backgroundColor: '#E3B748', borderRadius: '10px'}} variant="contained">Let's talk</Button>

        </Paper>
        </div>
        <div className="hero_container_child">
            <img src={HeroImage} width="75%" height="auto"></img>
        </div>

    </div>
    </div>

}

export default HeroSection;