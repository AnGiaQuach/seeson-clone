import { useState } from "react";
import LeftHeader from "./LeftHeader";
import styles from "../styles/Header.module.css";
import RightHeader from "./RightHeader";
import Logo from "./Logo";

function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.Header}>
      <LeftHeader setIsHover={setIsHover} isHover={isHover}></LeftHeader>
      <Logo></Logo>
      <RightHeader setIsHover={setIsHover} isHover={isHover}></RightHeader>
      {isHover && <div className={styles.CoverMenu}></div>}
    </div>
  );
}

export default Header;
