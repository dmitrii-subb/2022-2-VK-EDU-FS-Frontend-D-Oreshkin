import React from "react";
import { Outlet } from "react-router-dom";

import { SidebarHeader } from "../../components/SidebarHeader";
import SidebarBody from "../../components/SidebarBody/SidebarBody";
import { SidebarSearchField } from "../../components/SidebarSearchField";

import styles from "./SidebarPage.module.scss";

function SidebarPage(props) {
  return (
    <>
      <aside className={styles.allChats}>
        <SidebarHeader />
        <SidebarSearchField />
        <SidebarBody />
      </aside>

      <Outlet />
    </>
  );
}

// const mapStateToProps = (state) => ({
//   messages: state.messagereducer.messages,
// });

// export default connect(mapStateToProps, { openChat })(SidebarPage);
export { SidebarPage };
