import axios from 'axios'

const apis = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000'
})

const api_login = async (username, password) => {
    const newPost = {
        username,
        password,
    }
    try {
        const response = await apis.post('/adminlogin', newPost)
        console.log('-> fe recv login res: ', response.data)
        return response.data.success
    } catch (err) {
        if(err.response) {
            console.error('err.response: ', err.response.data.success)
        } else {
            console.error(`error msg: ${err}`)
        }
        return false
    }
}


export {
    api_login
}