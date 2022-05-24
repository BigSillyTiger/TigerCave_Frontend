import React, { FC, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
//mui icon
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const Menu_Classes = ["aLl", "Pics", "Words", "Articles"];

const BlogMenu: FC = () => {
    const [selectedM, setSelectedM] = useState<number>(0);
    const handleSelectedM = (v: number) => {
        setSelectedM(v);
    };

    const menu1 = Menu_Classes.map((item: any, index: number) => {
        return (
            <ListItemButton
                key={item}
                selected={selectedM === index}
                onClick={(event) => {
                    handleSelectedM(index);
                }}
            >
                <ListItemIcon>
                    <SendIcon />
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
                {menu1}
            </List>
        </Paper>
    );
};

export default BlogMenu;
