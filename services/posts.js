import {httpGet} from "./index";


export default {
    getPostsLatest: () => httpGet({url: '/posts/latest'})
}