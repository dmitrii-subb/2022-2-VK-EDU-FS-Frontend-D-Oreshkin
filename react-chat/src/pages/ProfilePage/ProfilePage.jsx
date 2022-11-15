import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfileBody } from "../../components/ProfileBody";

import styles from "./ProfilePage.module.scss";

function ProfilePage() {
  return (
    <aside className={styles.profilePage}>
      <ProfileHeader />
      <ProfileBody />
    </aside>
  );
}

export { ProfilePage };
