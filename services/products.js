import {httpGet} from "./index";


export default {
    getProductsBestOffers: () => httpGet({url: '/products/best-offers'}, {timeout: 1000 * 20}),
    getProducts: (params) => httpGet({url: '/products', params}),
    getProductCategories: () => httpGet({url: '/product-categories'}),
    getProductBrands: () => httpGet({url: '/product-brands'}),
    getProduct: (slug) => httpGet({url: `/products/${slug}`}, {timeout: 1000 * 20})
}