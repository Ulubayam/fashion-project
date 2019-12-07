import React from "react";
import { Filter } from "../components";

function Sidebar(props) {
  return (
    <div>
      <Filter
        onFilterProducts={props.onFilterProducts}
        activeFilter={props.activeFilter}
        resetFilter = {props.resetFilter}
      />
    </div>
  );
}

export default Sidebar;
