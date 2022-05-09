import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
import { Link } from "react-router-dom";
// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LogProMenu from './interMenu';
import Logo from './logo';
import MenuList from './menuList';
import MobilMenuList from './mobilMenuList';


const TopBar: FC = () => {
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    {/* mobile */}
                    <Box 
                        sx={{display: {xs: 'flex', md: 'none'}, width: '100%'}}
                    >
                        <MobilMenuList fg={1}/>{/* flexgrow 1 */}
                        <Logo fg={1}/>{/* flexgrow 1 */}
                        <LogProMenu fg={0}/>{/* flexgrow 0 */}
                    </Box>
                    {/* PC */}
                    <Box 
                        sx={{display: {xs: 'none', md: 'flex'}, width: '100%'}}
                    >
                        <Logo fg={1}/>{/* flexgrow 1 */}
                        <MenuList fg={3}/>{/* flexgrow 3 */}
                        <LogProMenu fg={0}/>{/* flexgrow 0 */}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopBar