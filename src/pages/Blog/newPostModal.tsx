import React, { FC, useState } from "react";
import { connect } from "react-redux";
// mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
//
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import { API_ROAR } from "../../api";
import {
    roarUpdate,
    selectRoarMenu,
} from "../../redux_store/features/roar/roarSlice";
import { roar_menu_items } from "../../config/pageConfig";

type propsType = {
    open: boolean;
    onClose: any;
    currentMenu: roar_menu_items;
    roarUpdate: any;
};

/* const StyledDialog = styled(Dialog)(({ theme }) => ({
    width: "70%",
    border: "1px red solid",
    margin: "0 auto",
})); */

const Input = styled("input")({
    display: "none",
});

const NewPostModal: FC<propsType> = ({
    open,
    onClose,
    currentMenu,
    roarUpdate,
}) => {
    const [content, setContent] = useState("");
    const handlePostClick = () => {
        API_ROAR.newRoar(content)
            .then((res) => {
                console.log("--> ui rece: ", res);
                if (1) {
                    API_ROAR.getRoars(currentMenu)
                        .then((result) => {
                            const roarPosts = JSON.parse(result.content);
                            roarUpdate(roarPosts);
                        })
                        .catch((err) => {
                            console.log("err: ", err);
                        });
                }
            })
            .catch((err) => {
                console.log("-> ui err: ", err);
            });
        onClose();
    };
    const handleContent = (event: any) => {
        setContent(event.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Words Post:</DialogTitle>
            <DialogContent>Something you wanna share~</DialogContent>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ width: "90%", margin: "0 auto" }}
            >
                <TextField
                    autoFocus
                    margin="normal"
                    id="name"
                    label="New Post:"
                    type="text"
                    fullWidth
                    variant="outlined"
                    multiline
                    maxRows={5}
                    minRows={2}
                    onChange={handleContent}
                />
                <label htmlFor="icon-upload-btn">
                    <Input
                        accept="image/*"
                        id="icon-upload-btn"
                        multiple
                        type="file"
                    />
                    <IconButton
                        color="primary"
                        aria-label="upload-pics"
                        component="span"
                    >
                        <InsertPhotoIcon />
                    </IconButton>
                </label>
            </Box>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handlePostClick}>Post</Button>
            </DialogActions>
        </Dialog>
    );
};

const mapStateToProps = (state: any) => {
    const currentMenu = selectRoarMenu(state);
    return { currentMenu };
};

export default connect(mapStateToProps, { roarUpdate })(NewPostModal);
