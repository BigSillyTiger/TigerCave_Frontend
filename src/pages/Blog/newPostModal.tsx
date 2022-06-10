import React, { FC, useState } from "react";
import { connect } from "react-redux";

// mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
//icons
import { FileUpload } from "@mui/icons-material";

//

import FilesUpload from "../../components/fileUpload";
import { roar_menu_items } from "../../config/pageConfig";
import { API_ROAR } from "../../api";
import {
    roarUpdate,
    selectRoarMenu,
} from "../../redux_store/features/roar/roarSlice";
import {
    selectUploadIMG,
    ULType,
} from "../../redux_store/features/uploadIMG/uploadIMGSlice";

type propsType = {
    uuid: string;
    open: boolean;
    onClose: any;
    currentMenu: roar_menu_items;
    roarUpdate: any;
    uploadList: Array<ULType>;
};

/* const StyledDialog = styled(Dialog)(({ theme }) => ({
    width: "70%",
    border: "1px red solid",
    margin: "0 auto",
})); */

const NewPostModal: FC<propsType> = ({
    uuid,
    open,
    onClose,
    currentMenu,
    roarUpdate,
    uploadList,
}) => {
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [uploadPics, setUploadPics] = useState();
    const handlePostClick = () => {
        //content === "" ? setContent("Blank Post") : "";
        API_ROAR.newRoar({ content, uuid })
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

    const uploadlistContent = (items: ULType[]) => {
        return (
            <ImageList sx={{ width: "100%" }} cols={3}>
                {items.map((item) => (
                    <ImageListItem key={item.title}>
                        <img
                            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Words Post: {uuid}</DialogTitle>
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
                <FilesUpload uuid={uuid} files={files} setFiles={setFiles} />
                {uploadList.length > 0 ? uploadlistContent(uploadList) : ""}
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
    const uploadList = selectUploadIMG(state);
    return { currentMenu, uploadList };
};

export default connect(mapStateToProps, { roarUpdate })(NewPostModal);
