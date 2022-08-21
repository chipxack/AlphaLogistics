import { httpPost } from ".";

export default {
    callback: (data) => httpPost({url: '/feedback/callback', data})  
}