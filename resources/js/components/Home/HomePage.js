import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
// MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Components
import Base from '../Layouts/Base';

const HomePage = (props) => {
    const [ clicks, setClicks ] = useState(0);

    const clickEvent = () => {
        setClicks(clicks + 1);
    }

    return (
        <Base>
            <Box
                sx={{
                    height: '80vh',
                    width: '35%'
                }}
            >
                <Grid
                    container
                    sx={{
                        minWidth: "100%",
                        minHeight: "90vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                    alignItems='center'
                    justify='center'
                    spacing={12}
                >
                    <Grid item xs={6}>
                    <Typography 
                        variant="h1"
                        gutterBottom
                        sx={{
                            color: '#2e384d'
                        }}
                    >
                        {clicks}
                    </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => clickEvent()}>Click Me!</Button>
                    </Grid>
                </Grid>
            </Box>
        </Base>
    );
}

export default HomePage;

if (document.getElementById('home-page')) {
    const root = createRoot(document.getElementById('home-page'));
    root.render(<HomePage/>);
}