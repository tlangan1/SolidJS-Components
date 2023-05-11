import logo from "./logo.svg";
import styles from "./App.module.css";

export function Introduction() {
  return (
    <header class="center-content">
      <img src={logo} class={styles.logo} alt="logo" />
      <a
        class={styles.link}
        href="https://www.solidjs.com/docs/latest/api"
        target="_blank"
        rel="noopener noreferrer"
      >
        The SolidJS API
      </a>
    </header>
  );
}
