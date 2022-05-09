import React, {FC} from 'react'
import {connect} from 'react-redux'
import {selectLogin} from '../../redux_store/features/login/loginSlice'


import Login from './loggin'
import ProfileMenu from './profileMenu'

const testFlag = true

type propsType = {
    fg: number
    loginStatus: any
}

const LogProMenu: FC<propsType> = ({fg, loginStatus}) => {
    return (
        loginStatus ? <ProfileMenu fg={fg}/> : <Login fg={fg}/>
    )
}

const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state)
    return {loginStatus}
}

export default connect(mapStateToProps)(LogProMenu)