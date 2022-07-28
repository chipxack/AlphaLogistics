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
            <App.Header dark={true}/>
            <Dashboard>
                <Dashboard.Aside>
                    <DashboardMenu/>
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

        return {
            props: {
                orders: orders.data?.data
            }
        }

    }catch(error) {
        return {
            props: {
                orders: []
            }
        }
    }
}

export default Orders;
