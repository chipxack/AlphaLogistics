import axios from 'axios'
import Cookies from 'js-cookie'

let isRefreshing = false
let refreshSubscribers = []

const baseUrl = `${process.env.NEXT_PUBLIC_URL}/api`

export const httpClient = axios.create({baseURL: baseUrl})

function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb)
}

function onRefreshed(token) {
    refreshSubscribers.map(cb => cb(token))
    refreshSubscribers = []
}

httpClient.interceptors.response.use(response => {
    return response
}, (error) => {
    const {config, response: {status}} = error
    const originalRequest = config
    const refreshToken = Cookies.get('refresh-token')
    if (status === 401) {
        if (refreshToken) {
            if (!isRefreshing) {
                isRefreshing = true
                axios.post(`${baseUrl}/refresh/token`, {refresh_token: refreshToken})
                    .then(res => {
                        isRefreshing = false
                        onRefreshed(res.data.access)
                        Cookies.set('token', res.data?.success?.access_token)
                        Cookies.set('refresh-token', res.data?.success?.refresh_token)
                    })
                    .catch(() => {
                        // Cookies.remove('token')
                        // Cookies.remove('refresh-token')
                        // Cookies.remove('users')
                        isRefreshing = false
                    })
            }

            return new Promise((resolve, reject) => {
                subscribeTokenRefresh(token => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token
                    resolve(axios(originalRequest))
                })
            })
        }
    } else {
        return Promise.reject(error)
    }
})

httpClient.interceptors.request.use(config => {
    let token = Cookies.get('token')
    let configParams = config

    if (token) {
        if (configParams.headers.notAuth === undefined) {
            configParams.headers = Object.assign(configParams.headers, {Authorization: 'Bearer ' + token})
        } else {
            delete configParams.headers.notAuth
        }
        return configParams
    } else {
        // delete configParams.headers['Authorization']
        return configParams
    }
})

export const httpGet = params =>
    httpClient({
        method: 'get',
        ...params
    })

export const httpPost = params =>
    httpClient({
        method: 'post',
        ...params
    })

export const httpPut = params =>
    httpClient({
        method: 'put',
        ...params
    })

export const httpPatch = params =>
    httpClient({
        method: 'patch',
        ...params
    })

export const httpDelete = params =>
    httpClient({
        method: 'delete',
        ...params
    })