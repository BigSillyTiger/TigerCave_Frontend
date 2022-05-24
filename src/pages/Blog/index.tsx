import React, {
    FC,
    MouseEvent,
    TouchEvent,
    ChangeEvent,
    useState,
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
import NewPostModal from "./newPostModal";
import NewPostBtn from "./newPostBtn";
//

type propsType = {
    loginStatus: any;
};

const Blog: FC<propsType> = ({ loginStatus }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalOpen = (value: boolean) => {
        setModalOpen(value);
    };

    return (
        <>
            {/* content display area */}
            <Container sx={{ padding: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <BlogMenu />
                    </Grid>
                    <Grid item container sm={9} spacing={2}>
                        <Grid item sm={12}>
                            <BlogContent data={{}} />
                        </Grid>
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
    return { loginStatus };
};

export default connect(mapStateToProps)(Blog);
