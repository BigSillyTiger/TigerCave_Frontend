import React, { FC, useState, MouseEvent, TouchEvent } from "react";
import { connect } from "react-redux";
import MenuItem from "@mui/material/MenuItem";

//
import { selectLogin } from "../../../redux_store/features/login/loginSlice";
import {
    selectRoar,
    roarUpdate,
    selectRoarMenu,
} from "../../../redux_store/features/roar/roarSlice";
import { roar_menu_items } from "../../../config/pageConfig";

type propsType = {
    id: string;
    loginStatus: boolean;
    currentRoarMenu: roar_menu_items;
};

const RoarAMenu: FC<propsType> = ({ id, loginStatus, currentRoarMenu }) => {
    const [headMenuEl, setHeadMenuEl] = useState<null | HTMLInputElement>(null);
    const handleHeadMenuClose = () => {
        setHeadMenuEl(null);
    };
    const handleHeadMenuOpen = (
        event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
    ) => {
        setHeadMenuEl(event.currentTarget as HTMLInputElement);
    };

    return <></>;
};

const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state);
    const currentRoarMenu = selectRoarMenu(state);
    return { loginStatus, currentRoarMenu };
};

export default connect(mapStateToProps)(RoarAMenu);
