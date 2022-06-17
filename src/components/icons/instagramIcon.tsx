import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";

const InsIcon: FC = () => {
    const click = () => {
        window.open("https://www.instagram.com/big_silly_tiger/", "_blank");
    };

    return (
        <IconButton
            ar-aria-label="instagram-link"
            size="large"
            color="primary"
            onClick={click}
        >
            <InstagramIcon />
        </IconButton>
    );
};

export default InsIcon;
