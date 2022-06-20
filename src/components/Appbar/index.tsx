import React, { FC } from "react";
import { connect } from "react-redux";
// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import LogProMenu from "./interMenu";
import Logo from "./logo";
import MenuList from "./menuList";
import MobilMenuList from "./mobilMenuList";
import MaterialUISwitch from "../styledComponents/lightSwitch.style";
import { switchTheme } from "../../redux_store/features/theme/themeSlice";

type prpsType = {
    switchTheme: Function;
};

const TopBar: FC<prpsType> = ({ switchTheme }) => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    {/* mobile */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            width: "100%",
                        }}
                    >
                        <MobilMenuList fg={1} />
                        {/* flexgrow 1 */}
                        <Logo fg={1} />
                        {/* flexgrow 1 */}
                        <LogProMenu fg={0} />
                        {/* flexgrow 0 */}
                    </Box>
                    {/* PC */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Logo fg={1} />
                        {/* flexgrow 1 */}
                        <MenuList fg={3} />
                        {/* flexgrow 3 */}
                        <MaterialUISwitch
                            sx={{ marginRight: "2rem" }}
                            onClick={() => switchTheme()}
                        />
                        <LogProMenu fg={0} />
                        {/* flexgrow 0 */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default connect(null, { switchTheme })(TopBar);
