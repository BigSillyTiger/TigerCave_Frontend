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
    selectRoar,
    raorUpdate,
} from "../../redux_store/features/roar/roarSlice";
import NewPostModal from "./newPostModal";
import NewPostBtn from "./newPostBtn";
import { API_ROAR } from "../../api";
//

type propsType = {
    loginStatus: any;
    sPosts: any;
    raorUpdate: any;
};

const Blog: FC<propsType> = ({ loginStatus, sPosts, raorUpdate }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalOpen = (value: boolean) => {
        setModalOpen(value);
    };

    useEffect(() => {
        API_ROAR.getBlogPosts()
            .then((result) => {
                const roarPosts = JSON.parse(result.content);
                raorUpdate(roarPosts);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    }, []);

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
    const sPosts = selectRoar(state);
    return { loginStatus, sPosts };
};

export default connect(mapStateToProps, { raorUpdate })(Blog);
