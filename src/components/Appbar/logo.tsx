import React, {FC} from 'react'
import { Link } from "react-router-dom";
// MUI
import Typography from '@mui/material/Typography';
import {homePage} from '../../config/pageConfig';

const Logo: FC = () => {
  return (
    <Typography
        variant='h6'
        noWrap
        component="div"
        sx={{mr: 2, display:{xs: 'none', md: 'flex'}}}
    >
        <Link to={homePage.path}>
            Tiger's Cave 1
        </Link>
    </Typography>
  )
}

export default Logo