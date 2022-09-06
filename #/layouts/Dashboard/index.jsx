function Dashboard(props) {
  return <div className="flex | container mx-auto mobile-dashboard">{props.children}</div>;
}

function Aside(props) {
  return <aside className="w-1/4 mobile-aside">{props.children}</aside>;
}

function Content(props) {
  return <main className="w-3/4 mobile-main">{props.children}</main>;
}

Dashboard.Aside = Aside;
Dashboard.Content = Content;

export default Dashboard;
