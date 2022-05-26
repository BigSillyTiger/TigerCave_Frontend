import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import {
    selectLogin,
    userLogin,
    userLogout,
} from "../../redux_store/features/login/loginSlice";
import { API_LOGIN } from "../../api";

import Login from "./loggin";
import ProfileMenu from "./profileMenu";

type propsType = {
    fg: number;
    loginStatus: any;
    userLogin: any;
    userLogout: any;
};

const LogProMenu: FC<propsType> = ({
    fg,
    loginStatus,
    userLogin,
    userLogout,
}) => {
    useEffect(() => {
        API_LOGIN.checkLogin()
            .then((result) => {
                if (result) userLogin();
            })
            .catch((err) => {
                console.log("err: ", err);
                userLogout();
            });
    });

    return loginStatus ? <ProfileMenu fg={fg} /> : <Login fg={fg} />;
};

const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state);
    return { loginStatus };
};

export default connect(mapStateToProps, { userLogin, userLogout })(LogProMenu);
