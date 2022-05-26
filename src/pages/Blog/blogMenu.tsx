import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
//mui icon
import SendIcon from "@mui/icons-material/Send";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import MailLockIcon from "@mui/icons-material/MailLock";

import { selectLogin } from "../../redux_store/features/login/loginSlice";
import { raorUpdate } from "../../redux_store/features/roar/roarSlice";
import { API_ROAR } from "../../api";

const Menu_Classes = ["aLl", "Pics", "Words", "Articles"];
const AdminMenu_Classes = ["Archive"];

type propsType = {
    loginStatus: any;
    raorUpdate: any;
};

const BlogMenu: FC<propsType> = ({ loginStatus, raorUpdate }) => {
    const [selectedM, setSelectedM] = useState<number>(0);

    const handleSelectedM = (v: number) => {
        setSelectedM(v);
        if (v === 0) {
            API_ROAR.getRoars()
                .then((result) => {
                    const roarPosts = JSON.parse(result.content);
                    console.log("=> all click data: ", roarPosts);
                    raorUpdate(roarPosts);
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        }
    };

    const handleArchivedClick = (v: number) => {
        handleSelectedM(v);
        API_ROAR.getArchivedRoars()
            .then((result: any) => {
                const archivedPosts = JSON.parse(result.content);
                console.log("=> archive click data: ", archivedPosts);
                raorUpdate(archivedPosts);
            })
            .catch((err: any) => {
                console.log("err: ", err);
            });
    };

    const normal_menu = Menu_Classes.map((item: any, index: number) => {
        return (
            <ListItemButton
                key={item}
                selected={selectedM === index}
                onClick={(event) => {
                    handleSelectedM(index);
                }}
            >
                <ListItemIcon>
                    <BubbleChartIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        item[0].toUpperCase() + item.slice(1).toLowerCase()
                    }
                />
            </ListItemButton>
        );
    });

    const admin_menu = AdminMenu_Classes.map((item: any, index: number) => {
        return (
            <ListItemButton
                key={item}
                selected={selectedM === index + Menu_Classes.length}
                onClick={(event) => {
                    event.preventDefault();
                    handleArchivedClick(index + Menu_Classes.length);
                }}
            >
                <ListItemIcon>
                    <MailLockIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        item[0].toUpperCase() + item.slice(1).toLowerCase()
                    }
                />
            </ListItemButton>
        );
    });

    return (
        <Paper elevation={2}>
            <List
                sx={{ padding: "0.5rem", bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Blog Menu
                    </ListSubheader>
                }
            >
                {normal_menu}
                {loginStatus ? (
                    <>
                        <Divider />
                        {admin_menu}
                    </>
                ) : (
                    ""
                )}
            </List>
        </Paper>
    );
};
const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state);
    return { loginStatus };
};

export default connect(mapStateToProps, { raorUpdate })(BlogMenu);
