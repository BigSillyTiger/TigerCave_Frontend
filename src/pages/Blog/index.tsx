import React, {
    FC,
    MouseEvent,
    TouchEvent,
    ChangeEvent,
    useState,
    useEffect,
} from "react";
import { connect } from "react-redux";
// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
//
import BlogMenu from "./blogMenu";
import BlogContent from "./blogContent";
import { selectLogin } from "../../redux_store/features/login/loginSlice";
import {
    selectRoarMenu,
    roarUpdate,
    currentMenuUpdate,
} from "../../redux_store/features/roar/roarSlice";
import NewPostModal from "./newPostModal";
import NewPostBtn from "./newPostBtn";
import { API_ROAR } from "../../api";
//
import { roar_menu_items } from "../../config/pageConfig";

type propsType = {
    loginStatus: boolean;
    currentMenu: roar_menu_items;
    roarUpdate: any;
    currentMenuUpdate: any;
};

const Blog: FC<propsType> = ({
    loginStatus,
    currentMenu,
    roarUpdate,
    currentMenuUpdate,
}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalOpen = (value: boolean) => {
        setModalOpen(value);
    };

    useEffect(() => {
        if (currentMenu === "all") {
            API_ROAR.getRoars("all")
                .then((result) => {
                    const roarPosts = JSON.parse(result.content);
                    roarUpdate(roarPosts);
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        } else if (currentMenu === "archive") {
            API_ROAR.getRoars("archive")
                .then((result: any) => {
                    const archivedPosts = JSON.parse(result.content);
                    //console.log("=> archive click data: ", archivedPosts);
                    roarUpdate(archivedPosts);
                })
                .catch((err: any) => {
                    console.log("err: ", err);
                });
        }
    }, [currentMenu]);

    return (
        <>
            {/* content display area */}
            <Container sx={{ padding: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <BlogMenu />
                    </Grid>
                    <Grid item container sm={9} spacing={2}>
                        <BlogContent />
                    </Grid>
                </Grid>
            </Container>

            {/* new post btn */}
            {loginStatus ? <NewPostBtn handleModal={handleModalOpen} /> : ""}

            {/* modals for post new content */}
            <NewPostModal
                open={modalOpen}
                onClose={() => {
                    handleModalOpen(false);
                }}
            />
        </>
    );
};

const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state);
    const currentMenu = selectRoarMenu(state);
    return { loginStatus, currentMenu };
};

export default connect(mapStateToProps, { roarUpdate, currentMenuUpdate })(
    Blog
);
