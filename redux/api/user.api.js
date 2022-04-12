import axios from 'axios'
const SERVER = 'http://localhost:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

const joinAPI = (data) => axios.post(`${SERVER}/api/user/join`,inputs, { headers})

export default {
    joinAPI
}