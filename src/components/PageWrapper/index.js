import React from "react";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default PageWrapper;
