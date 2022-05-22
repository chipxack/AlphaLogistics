import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import ProfileCRUD from "pages/dashboard/ProfileCRUD";

function OrdersTrack(params) {
  return (
    <App>
      <App.Header dark={true} />
      <Dashboard>
        <Dashboard.Aside>
          <DashboardMenu />
        </Dashboard.Aside>

        <Dashboard.Content>
          <ProfileCRUD />
        </Dashboard.Content>
      </Dashboard>
      <App.Footer />
    </App>
  );
}

export default OrdersTrack;
