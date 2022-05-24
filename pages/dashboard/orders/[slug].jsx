import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import OrderInfo from "pages/dashboard/OrderInfo";

function Orders(params) {
  return (
    <App>
      <App.Header dark={true} />
      <Dashboard>
        <Dashboard.Aside>
          <DashboardMenu />
        </Dashboard.Aside>

        <Dashboard.Content>
          <OrderInfo />
        </Dashboard.Content>
      </Dashboard>
      <App.Footer />
    </App>
  );
}

export default Orders;
