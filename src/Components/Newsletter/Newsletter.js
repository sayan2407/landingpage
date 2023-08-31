import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

import "./Newsletter.css";

const Newsletter = () => {

    return <div className="container newsletter_container">

        <h1>Subscribe Our Newsletter</h1>
        <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                
                <InputBase
                    sx={{ ml: 1, flex: 1, marginRight: '10px', backgroundColor: 'gray' }}
                    placeholder="Name:"
                    inputProps={{ 'aria-label': 'search google maps' }}
                 />
                  <InputBase
                    sx={{ ml: 1, flex: 1, marginRight: '10px', backgroundColor: 'gray' }}
                    placeholder="Enter your Email"
                    inputProps={{ 'aria-label': 'search google maps' }}
                 />
                 <Button style={{color: 'black', backgroundColor: '#E3B748', borderRadius: '10px'}} variant="contained">SEND</Button>

        </Paper>

    </div>

}

export default Newsletter;