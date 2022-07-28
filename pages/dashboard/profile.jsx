import App from "layouts/App";
import Dashboard from "layouts/Dashboard";
import DashboardMenu from "pages/dashboard/DashboardMenu";
import ProfileCRUD from "pages/dashboard/ProfileCRUD";
import profile from "../../services/profile";

function Profile(props) {
  return (
    <App>
      <App.Header profile={props.profile} dark={true} />
      <Dashboard>
        <Dashboard.Aside>
          <DashboardMenu />
        </Dashboard.Aside>

        <Dashboard.Content>
          <ProfileCRUD profile={props.profile} />
        </Dashboard.Content>
      </Dashboard>
      <App.Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token
    // console.log('context', context.req.cookies)
    try {
        if (token) {
            const data = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            const profileData = await profile.getUserProfile(data)

            return {
                props: {
                    profile: profileData.data
                }
            }
        } else {
            return {
                props: {
                    profile: null
                }
            }
        }


    }catch(error) {
        return {
            props: {
                profile: null
            }
        }
    }
}

export default Profile;
