import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import UserOrders from "pages/dashboard/UserOrders";
import profile from "../../../services/profile";
// import type {NextRequest} from 'next/server'

function Orders(props) {
    // console.log("orders: ", props)

    return (
        <App>
            <App.Header profile={props.profile} dark={true}/>
            <Dashboard>
                <Dashboard.Aside>
                    <DashboardMenu profile={props.profile}/>
                </Dashboard.Aside>

                <Dashboard.Content>
                    <UserOrders data={props?.orders?.data}/>
                </Dashboard.Content>
            </Dashboard>
            <App.Footer/>
        </App>
    );
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token
    // console.log('context', context.req.cookies)
    try {
        const data = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const orders = await profile.getUserOrders(data)
        const profileData = await profile.getUserProfile(data)


        return {
            props: {
                orders: orders.data?.data,
                profile: profileData.data
            }
        }

    }catch(error) {
        return {
            props: {
                orders: [],
                profile: null
            }
        }
    }
}

export default Orders;
