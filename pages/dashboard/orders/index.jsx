import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import UserOrders from "pages/dashboard/UserOrders";

function Orders(params) {
  return (
    <App>
      <App.Header dark={true} />
      <Dashboard>
        <Dashboard.Aside>
          <DashboardMenu />
        </Dashboard.Aside>

        <Dashboard.Content>
          <UserOrders />
        </Dashboard.Content>
      </Dashboard>
      <App.Footer />
    </App>
  );
}

export default Orders;
