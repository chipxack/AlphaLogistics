import {httpGet} from "./index";


export default {
    getPartners: () => httpGet({url: '/partners'})
}