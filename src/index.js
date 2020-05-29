import React from "react";
import styles from "./styles.module.css";

const ReactThemeToggleButton = ({ isDark, onChange }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={styles.container}
    title={isDark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  >
    <input type="checkbox" onChange={onChange} />
    <div />
  </label>
);

export default ReactThemeToggleButton;
