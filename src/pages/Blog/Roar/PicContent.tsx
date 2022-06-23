import React, { FC } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

type propsType = {
    items: Array<any>;
};

const PicContent: FC<propsType> = ({ items }) => {
    if (items.length === 0) {
        return <></>;
    }
    const ImgItems = items.map((item: any) => (
        <ImageListItem key={item.title} rows={1} cols={1}>
            <img
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    ));
    return (
        <ImageList
            sx={{ width: "100%" }}
            gap={8}
            cols={3}
            rowHeight={200}
            variant="quilted"
        >
            {ImgItems}
        </ImageList>
    );
};

export default PicContent;
