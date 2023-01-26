import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
// MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// Components
import Base from '../Layouts/Base';

const HomePage = (props) => {
    return (
        <Base>
            <Box>
                <Grid
                    container
                    spacing={2}
                    justify="center"
                >
                    <Grid item xs={12}>
                        <Button variant="contained">Click Me!</Button>
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