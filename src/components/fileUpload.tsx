import React, { FC } from "react";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { API_ROAR, API_UPLOAD } from "../api";
import { updateUploadList } from "../redux_store/features/uploadIMG/uploadIMGSlice";

const Input = styled("input")({
    display: "none",
});

type propsType = {
    uuid: string;
    files: any;
    setFiles: any;
    updateUploadList: Function;
};

const FilesUpload: FC<propsType> = ({
    uuid,
    files,
    setFiles,
    updateUploadList,
}) => {
    const handleUpload = (event: any) => {
        const file = event.target.files[0];
        file.isUploading = true;
        setFiles([...files, file]);

        //setUploadPics(formData);
        API_UPLOAD.upload(file, uuid)
            .then((result) => {
                console.log("===> upload result: ", result);
                updateUploadList(result);
            })
            .catch((err) => {
                console.log("===> upload err: ", err);
            });
    };
    return (
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
    );
};

export default connect(null, { updateUploadList })(FilesUpload);
