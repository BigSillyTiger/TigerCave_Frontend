import React, {FC, useEffect} from 'react'
import {connect} from 'react-redux'
import {selectLogin, userLogin} from '../../redux_store/features/login/loginSlice'
import {api_checkLogin} from '../../api/get'

import Login from './loggin'
import ProfileMenu from './profileMenu'

const testFlag = true

type propsType = {
    fg: number
    loginStatus: any,
    userLogin: any
}

const LogProMenu: FC<propsType> = ({fg, loginStatus, userLogin}) => {
    useEffect(() => {
        api_checkLogin()
            .then((result) => {
                console.log('=> api_checkLogin test: ', result)
                if(result) userLogin()
            })
            .catch(err => {
                console.log('err: ', err)
            })
    })

    return (
        loginStatus ? <ProfileMenu fg={fg}/> : <Login fg={fg}/>
    )
}

const mapStateToProps = (state: any) => {
    const loginStatus = selectLogin(state)
    return {loginStatus}
}

export default connect(mapStateToProps, {userLogin})(LogProMenu)