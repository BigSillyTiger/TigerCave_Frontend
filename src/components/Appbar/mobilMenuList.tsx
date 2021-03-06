import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
// MUI icons
import MenuIcon from '@mui/icons-material/Menu';

import { mainMenuCfg as menu_items, homePage, profileMenu} from '../../config/pageConfig';

type props = {
    fg: number
}

const MobilMenuList: FC<props> = ({fg}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLInputElement>(null)
    
    const handleOpen = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {setAnchorEl(event.currentTarget as HTMLInputElement)}
    const handleClose = () => {setAnchorEl(null)}

    return (
        <Box sx={{flexGrow: fg, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
                size='large'
                arial-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpen}
                color='inherit'
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{display: {xs: 'block', md: 'none'}}}
            >
                {menu_items.map(item => (
                    <MenuItem key={item.title} onClick={handleClose} >
                        <Typography textAlign='center'>{item.title}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default MobilMenuList