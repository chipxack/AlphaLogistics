import React, { useState } from "react";
import { Collapse } from "react-collapse";

const CollapseContext = React.createContext({
  collapse: "",
  toggleCollapse: () => {},
});

function CollapseCustom(props) {
  const [collapse, toggleCollapse] = useState(false);

  return (
    <CollapseContext.Provider value={{ collapse, toggleCollapse }}>
      {props.children}
    </CollapseContext.Provider>
  );
}

function Button(props) {
  const { collapse, toggleCollapse } = React.useContext(CollapseContext);

  return (
    <div onClick={() => toggleCollapse(!collapse)} className="cursor-pointer">
      {props.children}
    </div>
  );
}

function Content(props) {
  const { collapse } = React.useContext(CollapseContext);

  return <Collapse isOpened={collapse}>{props.children}</Collapse>;
}

CollapseCustom.Button = Button;
CollapseCustom.Content = Content;

export default CollapseCustom;
