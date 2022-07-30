import { httpGet } from './index'

export default {
  all: () => httpGet({ url: '/get/countries' }),
}
