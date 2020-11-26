import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";

import styles from "./Preloader.module.css";

const Preloader = ({ visible, children }) => {
  const [isReady, setReady] = useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  if (!visible && isReady) {
    return children;
  }

  return (
    <div className={styles.wrapper}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
