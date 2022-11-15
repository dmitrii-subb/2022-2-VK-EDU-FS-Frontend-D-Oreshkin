import React from "react";

import { SidebarHeader } from "../../components/SidebarHeader";
import { SidebarBody } from "../../components/SidebarBody";
import { FloatButton } from "../../components/FloatButton";

import styles from "./SidebarPage.module.scss";

function SidebarPage({ openChat }) {
  return (
    <aside className={styles.allChats}>
      <SidebarHeader />
      <SidebarBody openChat={openChat} />
      <FloatButton />
    </aside>
  );
}

export { SidebarPage };
