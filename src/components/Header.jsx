import { useState } from "react";
// import LeftHeader from "./LeftHeader";
import styles from "../styles/Header.module.css";
// import RightHeader from "./RightHeader";
import Logo from "./Logo";
import Title from "./Title";
import MenuTitle from "./MenuTitle";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

function Header() {
  const [isHover, setIsHover] = useState(false);
  const productSubtitles = [
    { title: "KÍNH CẬN", url: "" },
    { title: "KÍNH RÂM", url: "" },
    { title: "PHỤ KIỆN", url: "" },
  ];

  const serviceSubtitles = [
    { title: "ĐO KHÁM KHÚC XẠ", url: "" },
    { title: "LÀM GỌNG KÍNH MỚI", url: "" },
  ];

  return (
    <div className={styles.Header}>
      <div className={styles.LeftHeader}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Title
            itemStyle={`${styles.Title} ${styles.LeftMostTitle}`}
            title="PROJECT"
          >
            {" "}
          </Title>
        </Link>

        <Link to={"/product"} style={{ textDecoration: "none" }}>
          <MenuTitle
            itemStyle={styles.Title}
            title="SẢN PHẨM"
            listOfSubtitles={productSubtitles}
            setIsHover={setIsHover}
            isHover={isHover}
          ></MenuTitle>
        </Link>

        <Title itemStyle={styles.Title} title="VỀ SEESON"></Title>
      </div>

      <Logo></Logo>
      <div className={styles.RightHeader}>
        <MenuTitle
          title={"DỊCH VỤ"}
          itemStyle={styles.Title}
          listOfSubtitles={serviceSubtitles}
          setIsHover={setIsHover}
          isHover={isHover}
        ></MenuTitle>
        <Title title={"CỬA HÀNG"} itemStyle={styles.Title}></Title>
        <svg
          className="iconSearch"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.0875 31.2542L28.2284 27.3834C29.5281 26.0739 30.2724 24.3133 30.3061 22.4686C30.3398 20.6238 29.6604 18.8372 28.4093 17.4811C27.1583 16.125 25.4322 15.3039 23.5907 15.189C21.7493 15.0742 19.9345 15.6744 18.5246 16.8645C17.1148 18.0547 16.2186 19.743 16.0228 21.5776C15.827 23.4122 16.3467 25.2517 17.4737 26.7125C18.6006 28.1734 20.2478 29.1431 22.0721 29.4194C23.8963 29.6957 25.7568 29.2574 27.2659 28.1958L31.2017 32.1459C31.2602 32.204 31.3297 32.2501 31.406 32.2814C31.4824 32.3128 31.5641 32.3287 31.6467 32.3285C31.7292 32.3282 31.8109 32.3117 31.887 32.2799C31.9632 32.248 32.0323 32.2015 32.0904 32.1429C32.1486 32.0844 32.1947 32.015 32.226 31.9386C32.2573 31.8623 32.2733 31.7805 32.2731 31.698C32.2728 31.6155 32.2563 31.5338 32.2244 31.4576C32.1926 31.3815 32.1461 31.3124 32.0875 31.2542ZM17.3375 22.375C17.3412 21.2192 17.6874 20.0904 18.3322 19.1312C18.977 18.172 19.8916 17.4254 20.9605 16.9857C22.0294 16.5459 23.2046 16.4327 24.3378 16.6605C25.4709 16.8883 26.5112 17.4467 27.3271 18.2653C28.1431 19.0839 28.6982 20.1259 28.9223 21.2598C29.1465 22.3937 29.0296 23.5685 28.5864 24.636C28.1432 25.7034 27.3937 26.6157 26.4324 27.2574C25.4711 27.8992 24.3413 28.2417 23.1854 28.2417C22.4162 28.2406 21.6547 28.088 20.9445 27.7925C20.2343 27.4971 19.5892 27.0646 19.0461 26.5198C18.5031 25.975 18.0727 25.3286 17.7795 24.6174C17.4863 23.9062 17.3362 23.1442 17.3375 22.375Z"
            fill="#111212"
          ></path>
        </svg>

        <CartIcon></CartIcon>
      </div>
      {isHover && <div className={styles.CoverMenu}></div>}
    </div>
  );
}

export default Header;
