import React from "react";
import { Filter } from "../components";

function Sidebar(props) {
  return (
    <div>
      <Filter
        onFilterProducts={props.onFilterProducts}
        activeFilter={props.activeFilter}
      />
    </div>
  );
}

export default Sidebar;
