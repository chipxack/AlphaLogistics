import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";

function App(props) {
  return (
    <div className={["relative", props.className].join(" ")}>
      {props.children}
    </div>
  );
}

App.Header = Header;
App.Footer = Footer;

export default App;
