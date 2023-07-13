import { useState } from "react";
import styles from "./header.module.css";

function Header() {
  const redirectToMainPage = () => {
    window.location.href = "/";
  };

  const handleSessionClick = (page) => {
    window.location.href = `http://localhost:3000/${page}`;
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 관리

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 상태 반전
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSession}>
        <img src="/로고.png" alt="logo" onClick={redirectToMainPage} style={{ cursor: "pointer" }} />
        <span className={styles.logoText} onClick={redirectToMainPage}>Coz Shopping</span>
      </div>
      <div className={styles.rightSession}>
        <div className={styles.hamburger} onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isDropdownOpen && ( // 드롭다운이 열려 있을 때만 렌더링
        <div id="dropdown" className={styles.dropdown}>
          <ul className={styles.dropdownInner}>
            <li>이민주 님, 안녕하세요!</li>
            <li onClick={() => handleSessionClick("products/list")}>
              <img src="/상품 아이콘.png" alt="상품 아이콘" className={styles.icon} />
              <span>상품 리스트 페이지</span>
            </li>
            <li onClick={() => handleSessionClick("bookmark")}>
              <img src="/북마크 아이콘.png" alt="북마크 아이콘" className={styles.icon} />
              <span>북마크 페이지</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;