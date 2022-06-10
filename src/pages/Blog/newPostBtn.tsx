import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
// mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// icon
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import NewPostModal from "./newPostModal";
import {
    clearULThunk,
    clearUploadList,
} from "../../redux_store/features/uploadIMG/uploadIMGSlice";

type propsType = {
    clearULThunk: Function;
    clearUploadList: Function;
};

const NewPostBtn: FC<propsType> = ({ clearULThunk, clearUploadList }) => {
    const [postAnchEl, setPostAnchEl] = useState(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalOpen = (value: boolean) => {
        setModalOpen(value);
    };
    const openBtn = Boolean(postAnchEl);
    const handleMenuClick = (event: any) => {
        setPostAnchEl(event.currentTarget);
    };
    const handlePostClose = () => {
        setPostAnchEl(null);
    };
    const handlePostClick = () => {
        setPostAnchEl(null);
        handleModalOpen(true);
    };
    const handleCloseModal = (clear: boolean) => {
        handleModalOpen(false);
        if (clear) clearULThunk();
        else clearUploadList();
    };

    return (
        <>
            <IconButton
                aria-label="new-post"
                color="success"
                size="large"
                sx={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "4rem",
                }}
                onClick={handleMenuClick}
            >
                <NoteAltOutlinedIcon />
            </IconButton>
            <Menu
                id="basic-post-menu"
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

            {/* modals for post new content */}
            <NewPostModal
                uuid={uuidv4()}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default connect(null, { clearULThunk, clearUploadList })(NewPostBtn);
