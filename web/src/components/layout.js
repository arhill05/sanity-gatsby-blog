import React from "react";
import Header from "./header";
import HeroIcons from "./hero-icons";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <div className={styles.layoutWrapper}>
      <Header
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
      />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <HeroIcons />
        </div>
      </footer>
    </div>
  </>
);

export default Layout;
