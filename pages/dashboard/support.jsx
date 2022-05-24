import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import ClientSupport from "pages/dashboard/Support";

function Support(params) {
  return (
    <App>
      <App.Header dark={true} />
      <Dashboard>
        <Dashboard.Aside>
          <DashboardMenu />
        </Dashboard.Aside>

        <Dashboard.Content>
          <ClientSupport />
        </Dashboard.Content>
      </Dashboard>
      <App.Footer />
    </App>
  );
}

export default Support;
