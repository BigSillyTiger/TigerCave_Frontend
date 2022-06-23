import React, {
    FC,
    useEffect,
    useState,
    useRef,
    MouseEvent,
    TouchEvent,
} from "react";
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
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Divider from "@mui/material/Divider";
//
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { API_ROAR } from "../../api";
import {
    selectRoar,
    roarUpdate,
    selectRoarMenu,
} from "../../redux_store/features/roar/roarSlice";
import { selectLogin } from "../../redux_store/features/login/loginSlice";
import { dateFormat } from "../../config/utils";
import { roar_menu_items } from "../../config/pageConfig";
import Roar from "./Roar";

type propsType = {
    roars: any;
};

const BlogContent: FC<propsType> = ({ roars }) => {
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

    const content = roars.map((item: any) => {
        return <Roar key={item._id} roar={item} />;
    });
    return <>{content}</>;
};

const mapStateToProps = (state: any) => {
    const roars = selectRoar(state);
    return { roars };
};

export default connect(mapStateToProps)(BlogContent);
