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
import MenuItem from "@mui/material/MenuItem";
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
    roarUpdate: any;
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
            })
            .catch((err) => {
                console.log("delete/hide roar err: ", err);
            });
    };

    //const content = data.map((item: any) => {});
    const content = roars.map((item: any) => {
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
                        <Typography variant="h5">{item.content}</Typography>
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
