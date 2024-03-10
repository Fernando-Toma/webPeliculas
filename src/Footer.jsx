import styles from "./Footer.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";




export function Footer() {
  return (
        <footer className={styles.footer}>
        <div className={styles.dev}>
          <h3>Dev Fernando Tomaselli</h3>
          
        </div>
        <div className={styles.redes}>
          
          <a className={styles.red} href="https://www.linkedin.com/in/tomasellifernando/"><FaLinkedin /></a>
          <a className={styles.red} href="https://github.com/Fernando-Toma"><FaGithub /></a>
          <a className={styles.red} href="https://portfolio-tomaselli-fernando.netlify.app/"><FaDesktop /></a>
        </div>
        </footer>
  );
}
