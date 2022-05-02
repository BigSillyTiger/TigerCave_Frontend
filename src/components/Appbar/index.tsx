import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
import { Link } from "react-router-dom";
//
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import { mainMenuCfg as menu_items } from '../../config/pageConfig';

const profile_items = ['Dashboard', 'Account', 'Logout']

const TopBar: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLInputElement>(null)
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLInputElement>(null)

    const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {setAnchorElNav(event.currentTarget as HTMLInputElement)}
    const handleCloseNavMenu = () => {setAnchorElNav(null)}
    const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {setAnchorElUser(event.currentTarget as HTMLInputElement)}
    const handleCloseUserMenu = () => {setAnchorElUser(null)}

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* logo */}
                    <Typography
                        variant='h6'
                        noWrap
                        component="div"
                        sx={{mr: 2, display:{xs: 'none', md: 'flex'}}}
                    >
                        <Link to='/'>
                            Tiger's Cave 1
                        </Link>
                    </Typography>

                    {/* mobile menu */}
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size='large'
                            arial-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {menu_items.map(item => (
                                <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>{item.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* menu */}
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        Tiger's Cave
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {menu_items.map(item => (
                            <Button key={item.title} onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
                                <Link to='/backpage'>
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    {/* profile */}
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title='Open Setting'>
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt='user profile img' src='/images/avatar/1.png' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="profile-menu"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {profile_items.map(item => (
                                <MenuItem key={item} onClick={handleCloseUserMenu}>
                                    <Typography textAlign='center'>{item}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopBar