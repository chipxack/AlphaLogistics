import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import ProfileCRUD from "pages/dashboard/ProfileCRUD";
import profile from "../../services/profile";
import settings from "../../services/settings";

function Profile(props) {
  return (
    <App>
      <App.Header profile={props.profile} dark={true} />
      <Dashboard>
        <Dashboard.Aside>
          <DashboardMenu profile={props.profile} />
        </Dashboard.Aside>

        <Dashboard.Content>
          <ProfileCRUD countryList={props.countryList} profile={props.profile} />
        </Dashboard.Content>
      </Dashboard>
      <App.Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token

    try {
        if (token) {
            const data = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            const profileData = await profile.getUserProfile(data)
            const countryRes = await settings.getAllCountries()

            return {
                props: {
                    profile: profileData.data,
                    countryList: countryRes.data.data,
                }
            }
        } else {
            return {
                props: {
                    profile: null,
                    countryList: null
                }
            }
        }


    }catch(error) {
        return {
            props: {
                profile: null,
                countryList: null
            }
        }
    }
}

export default Profile;
