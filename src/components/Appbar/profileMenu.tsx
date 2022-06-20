import React, { FC, MouseEvent, TouchEvent, useState } from "react";
import { connect } from "react-redux";
import { userLogout } from "../../redux_store/features/login/loginSlice";
// MUI
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { profileMenu } from "../../config/pageConfig";
import { API_LOGIN } from "../../api";

type propsType = {
    fg: number;
    userLogout: Function;
};

const ProfileMenu: FC<propsType> = ({ fg, userLogout }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLInputElement>(null);
    const handleOpen = (
        event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
    ) => {
        setAnchorEl(event.currentTarget as HTMLInputElement);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        API_LOGIN.adminLogout();
        userLogout();
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Setting">
                <IconButton onClick={handleOpen} sx={{ p: "0 auto" }}>
                    <Avatar alt="user profile img" src="/images/avatar/1.png" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="profile-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {profileMenu.map((item) => (
                    <MenuItem key={item} onClick={handleLogOut}>
                        <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default connect(null, { userLogout })(ProfileMenu);
