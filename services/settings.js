import { httpGet } from './index'

export default {
  getAllCountries: () => httpGet({ url: '/get/countries' }),
  getCityList: (params) => httpGet({ url: '/get/cities', params })
}
