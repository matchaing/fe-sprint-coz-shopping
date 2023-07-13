import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        개인정보 처리방침 | 이용약관 <br />
        All rights reserved @codestates
      </div>
    </footer>
  );
}

export default Footer;
