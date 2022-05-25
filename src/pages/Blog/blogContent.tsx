import React, { FC, useEffect } from "react";
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
//
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { API_ROAR } from "../../api";
import { selectRoar } from "../../redux_store/features/roar/roarSlice";

type propsType = {
    roarPosts: any;
};

const A_DAY_TIME = 24 * 60 * 60 * 1000;
const A_HOUR_TIME = 60 * 60 * 1000;
const A_MIN_TIME = 60 * 1000;

const dateFormat = (value: string) => {
    const result = new Date(value);
    const currentTime = new Date();
    const partTime = currentTime.getTime() - result.getTime();
    if (A_HOUR_TIME <= partTime && A_DAY_TIME > partTime) {
        return `${Math.floor(partTime / (1000 * 60 * 60))} hours ago`;
    } else if (A_HOUR_TIME > partTime && A_MIN_TIME <= partTime) {
        return `${Math.floor(partTime / (1000 * 60))} mins ago`;
    } else if (A_MIN_TIME > partTime) {
        return `${Math.floor(partTime / 1000)} seconds ago`;
    }
    return result.toLocaleDateString("en-US");
};

const BlogContent: FC<propsType> = ({ roarPosts }) => {
    if (!roarPosts.length) {
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

    const deleteRoar = (id: string | number) => {
        console.log("=> clicked delete btn");
        //API_ROAR.deleteRoar(id)
        API_ROAR.archiveRoar(id)
            .then((res) => {
                console.log("delete/hide raor succeed: ", res);
            })
            .catch((err) => {
                console.log("delete/hide roar err: ", err);
            });
    };

    //const content = data.map((item: any) => {});
    const content = roarPosts.map((item: any) => {
        return (
            <Grid item xs={12} key={item._id}>
                <Card key={item._id}>
                    <CardHeader
                        avatar={<Avatar>T</Avatar>}
                        title={"test title"}
                        subheader={dateFormat(item.date)}
                        action={
                            <IconButton
                                aria-label="settings"
                                onClick={() => deleteRoar(item._id)}
                            >
                                <MoreVertIcon />
                            </IconButton>
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
    const roarPosts = selectRoar(state);
    return { roarPosts };
};

export default connect(mapStateToProps)(BlogContent);
