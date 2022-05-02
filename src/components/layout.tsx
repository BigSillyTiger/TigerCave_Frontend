import { ArrowUpward } from '@mui/icons-material'
import React, {FC, MouseEvent, TouchEvent, useState} from 'react'
import ScrollToTop from 'react-scroll-up'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
//
import TopBar from './Appbar'

const ScrollToTopProps = {
    showUnder: 160,
    duration: 1000
}

export type layoutProps = {
    children: any
}

const Layout: FC<layoutProps> = ({children}) => {

    return (
        <div>
            {/* app bar */}
            <TopBar />
            
            {/* content */}
            {children}

            {/* scroll to the top */}
            <ScrollToTop {...ScrollToTopProps}>
            {/* <ScrollToTop showUnder={160} duration={1000}> */}
                 <ArrowUpwardIcon />
            </ScrollToTop>
        </div>
    )
}

export default Layout

