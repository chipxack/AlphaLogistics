import { httpGet, httpPost } from '.'

export default {
  auth: (data) => httpPost({ url: '/login', data: data }),
  getUserOrders: (data) => httpGet({ url: '/user/orders', ...data }),
  getUserOrder: (uuid, data) =>
    httpGet({ url: `/user/orders/${uuid}`, ...data }),
  getUserProfile: (data) => httpGet({ url: '/user', ...data }),
}
