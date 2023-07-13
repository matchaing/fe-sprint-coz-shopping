import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
    <div>
        <span className={styles.footerText}>개인정보 처리방침 | 이용약관</span>
        <br />
        <span className={styles.footerText}>All rights reserved @codestates</span>
    </div>
    </footer>
  );
}

export default Footer;
