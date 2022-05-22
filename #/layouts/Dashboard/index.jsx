function Dashboard(props) {
  return <div className="flex | container mx-auto">{props.children}</div>;
}

function Aside(props) {
  return <aside className="w-1/4">{props.children}</aside>;
}

function Content(props) {
  return <main className="w-3/4">{props.children}</main>;
}

Dashboard.Aside = Aside;
Dashboard.Content = Content;

export default Dashboard;
