import React, { FC, useState } from "react";
// mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// icon
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";

type propsType = {
    handleModal: Function;
};

const NewPostBtn: FC<propsType> = ({ handleModal }) => {
    const [postAnchEl, setPostAnchEl] = useState(null);
    const openBtn = Boolean(postAnchEl);
    const handleMenuClick = (event: any) => {
        setPostAnchEl(event.currentTarget);
    };
    const handlePostClose = () => {
        setPostAnchEl(null);
    };
    const handlePostClick = () => {
        handleModal(true);
    };

    return (
        <>
            <IconButton
                aria-label="new-post"
                color="success"
                size="large"
                sx={{
                    position: "absolute",
                    bottom: "2rem",
                    right: "2rem",
                }}
                onClick={handleMenuClick}
            >
                <NoteAltOutlinedIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={postAnchEl}
                open={openBtn}
                onClose={handlePostClose}
                MenuListProps={{
                    "aria-labelledby": "new-post-button",
                }}
            >
                <MenuItem onClick={handlePostClick}>Welog</MenuItem>
                <MenuItem onClick={handlePostClick}>Words</MenuItem>
                <MenuItem onClick={handlePostClick}>Article</MenuItem>
            </Menu>
        </>
    );
};

export default NewPostBtn;
