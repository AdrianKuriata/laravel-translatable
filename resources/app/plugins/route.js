// Load laravel routes
import axios from '@plugins/axios'
import route from 'ziggy'

const {data} = await axios.get('/laravel-translatable/routes')
const routesData = data
export default ($name, $params) => {
    return route(`${routesData.as}${$name}`, $params, undefined, routesData.routes)
}
