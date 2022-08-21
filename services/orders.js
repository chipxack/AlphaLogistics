import { httpGet } from ".";

export default {
    getOrderById: (uuid) => httpGet({url: `/order-route/${uuid}`})
}