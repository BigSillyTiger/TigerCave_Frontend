import React, {FC} from 'react'
import { Link } from "react-router-dom";
// MUI
import Typography from '@mui/material/Typography';
import {homePage} from '../../config/pageConfig';

type props = {
  fg: number
}

const Logo: FC<props> = ({fg}) => {
  return (
    <Typography
        variant='h6'
        noWrap
        component="div"
        sx={{flexGrow: fg, display:{xs: 'flex'}}}
    >
        <Link to={homePage.path}>
            Tiger's Cave 1
        </Link>
    </Typography>
  )
}

export default Logo