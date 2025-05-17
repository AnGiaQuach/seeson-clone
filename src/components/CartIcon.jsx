import styles from "../styles/CartIcon.module.css";
import ShoppingCartTab from "./ShoppingCartTab";
import { useState } from "react";

function CartIcon() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log(isClicked);
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <div className={styles.CartIcon} onClick={handleClick}>
        {" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1667 4.21672H14.6667C14.8257 4.20532 14.9854 4.22666 15.1358 4.27938C15.2863 4.3321 15.4243 4.41506 15.5415 4.52321C15.6586 4.63137 15.7523 4.76245 15.8169 4.90824C15.8814 5.05403 15.9154 5.21146 15.9167 5.37089V16.2875C15.9181 16.6206 15.7873 16.9407 15.5529 17.1774C15.3185 17.4141 14.9998 17.5482 14.6667 17.55H1.33333C1.00021 17.5482 0.681468 17.4141 0.447094 17.1774C0.212721 16.9407 0.0818841 16.6206 0.0833248 16.2875V5.37089C0.0846253 5.21146 0.118588 5.05403 0.183117 4.90824C0.247646 4.76245 0.341377 4.63137 0.458513 4.52321C0.575649 4.41506 0.713705 4.3321 0.864168 4.27938C1.01463 4.22666 1.1743 4.20532 1.33333 4.21672H3.83333C4.14749 2.27505 6.03708 0.412598 7.99999 0.412598C9.96291 0.412598 11.8525 2.27505 12.1667 4.21672ZM10.9167 4.21672C10.6042 2.97505 9.25541 1.67501 7.99999 1.67501C6.74458 1.67501 5.39583 2.97505 5.08333 4.21672H10.9167ZM1.33333 16.2875H14.6667V5.46672H1.33333V16.2875Z"
            fill="#111212"
          ></path>
        </svg>{" "}
      </div>
      {isClicked && (
        <ShoppingCartTab
          handleCloseTab={() => {
            setIsClicked(false);
          }}
        />
      )}
    </div>
  );
}

export default CartIcon;
