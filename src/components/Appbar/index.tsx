import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
import { Link } from "react-router-dom";
// MUI
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import Login from './loggin';
import Logo from './logo';
import MenuList from './menuList';


const TopBar: FC = () => {
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    <Grid container>
                        {/* logo */}
                        <Grid item sm={2}>
                            <Logo />
                        </Grid>

                        {/* menu */}
                        <Grid item sm={8}>
                            <MenuList />
                        </Grid>

                        {/* login / profile */}
                        <Grid item sm={2}>
                            <Login />
                        </Grid>
                    </Grid>                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopBar