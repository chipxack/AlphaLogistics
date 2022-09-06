import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import OrderInfo from "pages/dashboard/OrderInfo";
import profile from "../../../services/profile";

function Orders(props) {

    return (
        <App>
            <App.Header profile={props.profile} dark={true}/>
            <Dashboard>
                <Dashboard.Aside>
                    <DashboardMenu profile={props.profile}/>
                </Dashboard.Aside>

                <Dashboard.Content>
                    <OrderInfo orderUuid={props.productUuid} orderData={props.order}/>
                </Dashboard.Content>
            </Dashboard>
            <App.Footer/>
        </App>
    );
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token
    const {slug} = context.params
    try {
        if (token) {
            const data = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            const profileData = await profile.getUserProfile(data)
            const order = await profile.getUserOrder(slug, data)

            return {
                props: {
                    order: order.data?.data,
                    profile: profileData.data,
                    productUuid: slug
                }
            }
        } else {
            return {notFound: true}
        }


    } catch (error) {
        console.log('error: ', error)
        return {
            props: {
                order: null,
                profile: null,
                productUuid: slug
            }
        }
    }
}

export default Orders;
