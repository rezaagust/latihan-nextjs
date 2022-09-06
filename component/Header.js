import React from 'react'
import { Grid, Toolbar, Container, Typography, AppBar, Box, Link, Button } from "@mui/material";

export default function Header() {
  return (
    <Box>
        <AppBar position='absolute'>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", background: "#2d2d2d" }}>
                <Typography variant='h5' fontWeight='bold'>
                    MATCHATV      
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '40%' }}>
                    <Grid container alignItems='center' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item xs ='auto'>
                            <Button variant='filled'>Home</Button>      
                        </Grid>
                        <Grid item xs ='auto'>
                            <Button variant='filled'>About</Button>      
                        </Grid>
                        <Grid item xs ='auto'>
                            <Button variant='filled'>Contact</Button>      
                        </Grid>
                    </Grid>      
                </Box>  
            </Toolbar>   
        </AppBar>
    </Box>
  )
}
