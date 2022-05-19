import Footer from "components/Footer";
import Header from "components/Header";

function App(props) {
  return <>{props.children}</>;
}

App.Header = Header;
App.Footer = Footer;

export default App;
