import React from "react";

import { SidebarHeader } from "../../components/SidebarHeader";
import { SidebarBody } from "../../components/SidebarBody";
import { SidebarSearchField } from "../../components/SidebarSearchField";

import styles from "./SidebarPage.module.scss";

function SidebarPage({ openChat }) {
  return (
    <aside className={styles.allChats}>
      <SidebarHeader />
      <SidebarSearchField />
      <SidebarBody openChat={openChat} />
    </aside>
  );
}

export { SidebarPage };