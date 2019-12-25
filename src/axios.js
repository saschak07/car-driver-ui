import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://saschakcar.herokuapp.com'
})

instance.defaults.headers.common['Authorization'] = 'Basic YWRtaW46ZnJlZU5vdw==';

export default instance;