import { httpGet, httpPost, httpPut } from '.'

export default {
  auth: (data) => httpPost({ url: '/login', data: data }),
  getUserOrders: (data) => httpGet({ url: '/user/orders', ...data }),
  getUserOrder: (uuid, data) =>
    httpGet({ url: `/user/orders/${uuid}`, ...data }),
  getUserProfile: (data) => httpGet({ url: '/user', ...data }),
  updateUserProfile: (data) => httpPut({url: '/user/profile', data}),
  imageUpload: (data) => httpPost({url: '/user/profile/image', data, headers: {"Content-Type": "multipart/form-data"}})
}
