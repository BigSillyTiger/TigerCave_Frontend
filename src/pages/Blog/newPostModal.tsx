import React, { FC, useState } from "react";
// mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import { API_ROAR } from "../../api";

type propsType = {
    open: boolean;
    onClose: any;
};

const StyledDialog = styled(Dialog)(({ theme }) => ({
    width: "70%",
    border: "1px red solid",
    margin: "0 auto",
}));

const NewPostModal: FC<propsType> = ({ open, onClose }) => {
    const [content, setContent] = useState("");
    const handlePostClick = () => {
        API_ROAR.newRoar(content)
            .then((res) => {
                console.log("--> ui rece: ", res);
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
            </Box>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handlePostClick}>Post</Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewPostModal;
