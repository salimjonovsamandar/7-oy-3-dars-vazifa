import React from "react";
import styles from "./index.module.css";
function index() {
  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Page Not Found</h1>
      <a className={styles.a} href="/login">
        Back to Home
      </a>
    </div>
  );
}
export default index;
