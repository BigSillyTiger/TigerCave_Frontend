import React, {
    FC,
    MouseEvent,
    TouchEvent,
    ChangeEvent,
    useState,
} from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux_store/features/login/loginSlice";
import Draggable from "react-draggable";
// MUI
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { OutlinedInput } from "@mui/material";
// MUI Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { API_LOGIN } from "../../api";

const PaperComponent: FC = (props: any) => {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
};

type propsType = {
    fg: number;
    userLogin: any;
};

type loginType = {
    account: string;
    password: string;
    showPassword: boolean;
};

const Login: FC<propsType> = ({ fg, userLogin }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [loginValues, setLoginValues] = useState<loginType>({
        account: "",
        password: "",
        showPassword: false,
    });

    const handleOpen = (
        event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
    ) => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleChange =
        (prop: string) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setLoginValues({ ...loginValues, [prop]: event.target.value });
        };
    const handleClickShowPW = () => {
        setLoginValues({
            ...loginValues,
            showPassword: !loginValues.showPassword,
        });
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        API_LOGIN.login(loginValues.account, loginValues.password)
            .then((response) => {
                if (response) {
                    userLogin();
                }
            })
            .catch((err) => {
                console.log("-> page err: ", err);
            });
        setLoginValues({ account: "", password: "", showPassword: false });
        handleClose();
    };

    const LoginForm = (
        <form onSubmit={handleSubmit}>
            <div>
                <FormControl
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                    size="small"
                >
                    <InputLabel htmlFor="component-outlined">
                        {" "}
                        Account{" "}
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={loginValues.account}
                        onChange={handleChange("account")}
                        label="Account"
                    />
                </FormControl>
                <br />
                <FormControl
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                    size="small"
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        {" "}
                        Password{" "}
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adorment-password"
                        type={loginValues.showPassword ? "text" : "password"}
                        value={loginValues.password}
                        onChange={handleChange("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPW}
                                    edge="end"
                                >
                                    {loginValues.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </div>
            <div>
                <Button onClick={handleClose}>Cancel</Button>
                <Button autoFocus onClick={handleClose} type="submit">
                    Login
                </Button>
            </div>
        </form>
    );

    return (
        <Box sx={{ flexGrow: fg }}>
            <Tooltip title="Loggin">
                <IconButton onClick={handleOpen} sx={{ p: "0 auto" }}>
                    <Avatar alt="login button">L</Avatar>
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                >
                    ~ Welcome ~
                </DialogTitle>
                <DialogContent>{LoginForm}</DialogContent>
            </Dialog>
        </Box>
    );
};

export default connect(null, { userLogin })(Login);
