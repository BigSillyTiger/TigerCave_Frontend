import axios from 'axios'

const apis = axios.create({
    baseURL: 'http://localhost:8000'
})

const api_login = async (username, password) => {
    const newPost = {
        username,
        password
    }
    try {
        const response = await apis.post('/adminlogin', newPost)
        return response.data.success
    } catch (err) {
        if(err.response) {
            console.log('err.response: ', err.response.data.success)
        } else {
            console.log(`error msg: ${err}`)
        }
        return false
    }
}

export {
    api_login
}