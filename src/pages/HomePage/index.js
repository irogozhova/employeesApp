import React from "react";
import Page from "components/Page";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

const HomePage = () => (
  <Page title="Home">
    <div className={styles.wrapper}>
      <Link to="/employees" className={styles.link}>
        Go to Employees List
      </Link>
    </div>
  </Page>
);

export default HomePage;
