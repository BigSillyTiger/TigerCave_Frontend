import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
import { Link } from "react-router-dom";
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import { mainMenuCfg as menu_items, homePage, profileMenu} from '../../config/pageConfig';
import { autocompleteClasses } from '@mui/material';

type props = {
    fg: number
}
  
const MenuList: FC<props> = ({fg}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLInputElement>(null)
    
    const handleOpen = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {setAnchorEl(event.currentTarget as HTMLInputElement)}
    const handleClose = () => {setAnchorEl(null)}

    return (
        <Box sx={{flexGrow: fg, display: {xs: 'none', md: 'flex'}}}>
            {menu_items.map(item => (
                <Button key={item.title} onClick={handleClose} sx={{my: 2, color: 'white', display: 'block'}}>
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </Button>
            ))}
        </Box>
  )
}

export default MenuList