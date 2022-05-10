import axios from 'axios'

const apis = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000'
})

const api_checkLogin = async () => {
    try {
        const response = await apis.get('/checkAuth')
        return response.data.success
    } catch (err) {
        if(err.response) {
            console.log('=> err.response: ', err.response)
        } else {
            console.log(`error msg: ${err}`)
        }
    }
}

const api_adminLogout = async () => {
    try {
        const response = await apis.get('/adminLogout')
        return response.data.note
    } catch (err) {
        if(err.response) {
            console.log('=> logout err.response: ', err.response)
        } else {
            console.log(`error msg: ${err}`)
        }
        return false
    }
}


export {
    api_checkLogin,
    api_adminLogout
}