import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
import Draggable from 'react-draggable';
// MUI
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const PaperComponent: FC = (props: any) => {
    return (
        <Draggable
            handle='#draggable-dialog-title'
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    )
}

const Login: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) =>{setOpen(true)}
    const handleClose = () => setOpen(false)

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title='Loggin'>
                <IconButton onClick={handleOpen} sx={{p: '0 auto'}}>
                    <Avatar alt='login button' >L</Avatar>
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby='draggable-dialog-title'
            >
                <DialogTitle style={{cursor: 'move'}} id='draggable-dialog-title'>
                    ~ Welcome ~
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        please login
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>
                        Login
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    )
}

export default Login