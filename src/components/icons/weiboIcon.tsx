import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const WBIcon: FC = () => {
    const click = () => {
        window.open("https://weibo.com/dabenhu", "_blank");
    };

    return (
        <IconButton
            ar-aria-label="instagram-link"
            size="large"
            color="primary"
            onClick={click}
        >
            <VisibilityOutlinedIcon />
        </IconButton>
    );
};

export default WBIcon;
