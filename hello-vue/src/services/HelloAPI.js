import axios from 'axios'

let apiBase ='api/cat'

export default {
    getHelloMessage() {
        return axios.get(apiBase).then(response => {
            return response.data})
    }
}