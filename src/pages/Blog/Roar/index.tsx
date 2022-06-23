import React, { FC, useState, MouseEvent, TouchEvent } from "react";
import { connect } from "react-redux";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
//
import PicContent from "./PicContent";
import { API_ROAR } from "../../../api";
import {
    selectRoar,
    roarUpdate,
    selectRoarMenu,
} from "../../../redux_store/features/roar/roarSlice";
import { selectLogin } from "../../../redux_store/features/login/loginSlice";
import { dateFormat } from "../../../config/utils";
import { roar_menu_items } from "../../../config/pageConfig";

type propsType = {
    loginStatus: boolean;
    currentRoarMenu: roar_menu_items;
    roarUpdate: Function;
    roar: any;
};
const Roar: FC<propsType> = ({
    loginStatus,
    currentRoarMenu,
    roarUpdate,
    roar,
}) => {
    const [menuEl, setMenuEl] = useState<null | HTMLInputElement>(null);
    const handleMenuOpen = (
        event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
    ) => {
        setMenuEl(event.currentTarget as HTMLInputElement);
    };
    const handleMenuClose = () => {
        setMenuEl(null);
    };

    const archiveRoar = (id: string | number, flag: boolean) => {
        API_ROAR.archiveRoar(id, flag)
            .then((res) => {
                console.log("delete/hide roar succeed: ", res);
                API_ROAR.getRoars(currentRoarMenu)
                    .then((result) => {
                        const roarPosts = JSON.parse(result.content);
                        console.log("=> update roars: ", roarPosts);
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

    const MoreVerBtn: FC<{ id: string }> = ({ id }) => {
        const idToken = id;
        switch (currentRoarMenu) {
            case "all":
            case "pics":
            case "words":
            case "articles":
                return (
                    <MenuItem
                        onClick={() => {
                            archiveRoar(id, true);
                            handleMenuClose();
                        }}
                    >
                        Archive {idToken}
                    </MenuItem>
                );
            case "archive":
                return (
                    <MenuItem
                        onClick={() => {
                            archiveRoar(id, false);
                            handleMenuClose();
                        }}
                    >
                        Unarchive
                    </MenuItem>
                );
            default:
                return (
                    <MenuItem
                        onClick={() => {
                            archiveRoar(id, true);
                            handleMenuClose();
                        }}
                    >
                        Archive
                    </MenuItem>
                );
        }
    };
    return (
        <Grid item xs={12} key={roar._id}>
            <Card key={roar._id} /* raised */>
                <CardHeader
                    avatar={<Avatar>T</Avatar>}
                    title={`Roar ID : ${roar._id}`}
                    subheader={dateFormat(roar.date)}
                    action={
                        loginStatus ? (
                            <>
                                <IconButton
                                    aria-label="settings"
                                    onClick={handleMenuOpen}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="head-menu"
                                    anchorEl={menuEl}
                                    open={Boolean(menuEl)}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                        "aria-labelledby": "new-post-button",
                                    }}
                                >
                                    <MoreVerBtn id={roar._id} />
                                </Menu>
                            </>
                        ) : (
                            ""
                        )
                    }
                ></CardHeader>
                <CardContent>
                    <Typography variant="h6" sx={{ padding: "0.5rem" }}>
                        {roar.content}
                    </Typography>
                    {roar.pics.length > 0 ? (
                        <PicContent items={roar.pics} />
                    ) : null}
                </CardContent>
            </Card>
        </Grid>
    );
};

const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state);
    const currentRoarMenu = selectRoarMenu(state);
    return { loginStatus, currentRoarMenu };
};

export default connect(mapStateToProps, { roarUpdate })(Roar);
