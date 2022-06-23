import React, { FC } from "react";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { API_ROAR, API_UPLOAD } from "../api";
import { updateUploadList } from "../redux_store/features/uploadIMG/uploadIMGSlice";
import { selectUploadIMG } from "../redux_store/features/uploadIMG/uploadIMGSlice";

const Input = styled("input")({
    display: "none",
});

type propsType = {
    uuid: string;
    files: any;
    setFiles: any;
    updateUploadList: Function;
    uploadList: any;
};

const FilesUpload: FC<propsType> = ({
    uuid,
    files,
    setFiles,
    updateUploadList,
    uploadList,
}) => {
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const handleUpload = (event: any) => {
        const uploadfiles = event.target.files;
        if (uploadfiles.length > 9 || uploadList.length === 9) {
            setAlertOpen(true);
            return 0;
        }
        setLoader(true);
        console.log("===> upload files: ", event.target.files);
        //file.isUploading = true;
        setFiles([...files, uploadfiles]);

        //setUploadPics(formData);
        API_UPLOAD.upload(uploadfiles, uuid)
            .then((result) => {
                console.log("===> upload result: ", result);
                for (let i = 0; i < result.imgURLs.length; i++) {
                    updateUploadList(result.imgURLs[i]);
                }
                setLoader(false);
            })
            .catch((err) => {
                console.log("===> upload err: ", err);
                setLoader(false);
            });
    };
    const handleAlertClose = () => {
        setAlertOpen(false);
    };
    return (
        <>
            <label htmlFor="icon-upload-btn">
                <Input
                    accept="image/*"
                    id="icon-upload-btn"
                    multiple
                    type="file"
                    onChange={handleUpload}
                />
                <IconButton
                    color="primary"
                    aria-label="upload-pics"
                    component="span"
                >
                    <InsertPhotoIcon />
                </IconButton>
            </label>
            <Snackbar
                open={alertOpen}
                autoHideDuration={6000}
                onClose={handleAlertClose}
            >
                <Alert
                    onClose={handleAlertClose}
                    severity="warning"
                    sx={{ width: "100%" }}
                >
                    Only 9 pictures allowed in total!
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loader}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};

const mapStateToProps = (state: any) => {
    const uploadList = selectUploadIMG(state);
    return { uploadList };
};

export default connect(mapStateToProps, { updateUploadList })(FilesUpload);
