import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
//
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
//
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { API_ROAR } from "../../api";
import {
    selectRoar,
    roarUpdate,
} from "../../redux_store/features/roar/roarSlice";
import { dateFormat } from "../../config/utils";

type propsType = {
    roars: any;
    roarUpdate: Function;
};

const BlogContent: FC<propsType> = ({ roars, roarUpdate }) => {
    const [headMenuEl, setHeadMenuEl] = useState(null);
    useEffect(() => {}, [roars]);

    if (!roars.length) {
        return (
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">No content yet</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    const archiveRoar = (id: string | number) => {
        console.log("=> clicked delete btn");
        API_ROAR.archiveRoar(id, true)
            .then((res) => {
                console.log("delete/hide roar succeed: ", res);
                API_ROAR.getRoars("all")
                    .then((result) => {
                        const roarPosts = JSON.parse(result.content);
                        roarUpdate(roarPosts);
                    })
                    .catch((err) => {
                        console.log("err: ", err);
                    });
            })
            .catch((err) => {
                console.log("delete/hide roar err: ", err);
            });
    };
    const picContent = (items: Array<any>) => {
        if (items.length === 0) {
            return "";
        }
        const newContent = items.map((item: any) => (
            <ImageListItem key={item.title}>
                <img
                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
            </ImageListItem>
        ));
        return (
            <>
                <Divider />
                <ImageList sx={{ width: "100%" }} cols={3}>
                    {newContent}
                </ImageList>
            </>
        );
    };

    //const content = data.map((item: any) => {});
    const content = roars.map((item: any) => {
        console.log("====> fe item: ", item.pics);
        const openHM = Boolean(headMenuEl);
        const handleHeadMenuClose = () => {};

        return (
            <Grid item xs={12} key={item._id}>
                <Card key={item._id}>
                    <CardHeader
                        avatar={<Avatar>T</Avatar>}
                        title={"test title"}
                        subheader={dateFormat(item.date)}
                        action={
                            <>
                                <IconButton
                                    aria-label="settings"
                                    onClick={() => archiveRoar(item._id)}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="head-menu"
                                    anchorEl={headMenuEl}
                                    open={openHM}
                                    onClose={handleHeadMenuClose}
                                    MenuListProps={{
                                        "aria-labelledby": "new-post-button",
                                    }}
                                >
                                    <MenuItem onClick={handleHeadMenuClose}>
                                        Archive
                                    </MenuItem>
                                    <MenuItem onClick={handleHeadMenuClose}>
                                        Archive
                                    </MenuItem>
                                </Menu>
                            </>
                        }
                    ></CardHeader>
                    <CardContent>
                        <Typography variant="h6">{item.content}</Typography>
                        {item.pics.length > 0 ? picContent(item.pics) : null}
                    </CardContent>
                </Card>
            </Grid>
        );
    });
    return <>{content}</>;
};

const mapStateToProps = (state: any) => {
    const roars = selectRoar(state);
    return { roars };
};

export default connect(mapStateToProps, { roarUpdate })(BlogContent);
