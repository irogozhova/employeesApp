import React from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "@material-ui/core/styles";

import styles from "./Page.module.css";

const Page = ({ title, children }) => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        className={styles.topBar}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <div>Welcome to Employees App!</div>
      </div>
      {children}
    </>
  );
};

export default React.memo(Page);
