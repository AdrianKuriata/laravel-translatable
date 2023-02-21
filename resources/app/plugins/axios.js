import axios from 'axios'

const createInstance = (baseURL) => {
    axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    })
    axios.interceptors.response.use(
        (response) => {
            document.dispatchEvent(new CustomEvent('notify', {
                detail: response.data
            }))

            return response
        },
        function (error) {
            if (!error.response) {
                return Promise.reject(error)
            }

            document.dispatchEvent(new CustomEvent('notify', {
                detail: {
                    message: error.message,
                    type: 'error'
                }
            }))

            return Promise.reject(error)
        }
    )

    return axios
}
export default createInstance('//')
