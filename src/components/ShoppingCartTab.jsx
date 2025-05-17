import styles from "../styles/ShoppingCartTab.module.css";
import { useState, useEffect } from "react";

function ShoppingCartTab({ handleCloseTab }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function DeleteItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  function changeQuantity(id, state) {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          if (state === "increase") {
            item.quantity += 1;
          } else if (state === "decrease") {
            item.quantity -= 1;
            item.quantity = Math.max(item.quantity, 1);
          }
        }
        return item;
      })
    );

    // console.log(cartItems);
  }

  return (
    <div className={styles.Background} onClick={handleCloseTab}>
      <div className={styles.Tab} onClick={(e) => e.stopPropagation()}>
        <div className={styles.Header}>
          <p>GIỎ HÀNG</p>
          <CloseButton handleCloseTab={handleCloseTab}></CloseButton>
        </div>
        {cartItems.map((item) => {
          return (
            <div key={item.id} className={styles.ItemContainer}>
              <div className={styles.RightSide}>
                <img src={item.img} className={styles.Img} />
                <div className={styles.ItemTitle}>{item.name}</div>
              </div>

              <div className={styles.LeftSide}>
                <div className={styles.Price}>
                  {item.price} {item.currency}
                </div>
                <div className={styles.SelectorContainer}>
                  <DeleteButton
                    deleteFunction={() => DeleteItem(item.id)}
                  ></DeleteButton>

                  <QuantitySelector
                    className={styles.QuantitySelector}
                    increaseFunction={() => changeQuantity(item.id, "increase")}
                    decreaseFunction={() => changeQuantity(item.id, "decrease")}
                    quantity={item.quantity}
                  ></QuantitySelector>
                </div>
              </div>
            </div>
          );
        })}

        <CheckoutButton cartItems={cartItems}></CheckoutButton>
      </div>
    </div>
  );
}

function QuantitySelector({ increaseFunction, decreaseFunction, quantity }) {
  return (
    <div className={styles.QuantitySelector}>
      <button className={styles.Button} onClick={increaseFunction}>
        +
      </button>
      <div className={styles.Quantity}>{quantity}</div>
      <button className={styles.Button} onClick={decreaseFunction}>
        -
      </button>
    </div>
  );
}

function DeleteButton({ deleteFunction }) {
  return (
    <div className={styles.DeleteButton} onClick={deleteFunction}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99967 1.1665C9.15501 1.1665 10.0991 2.0708 10.1629 3.21022L10.1663 3.33317H13.6663C13.9425 3.33317 14.1663 3.55703 14.1663 3.83317C14.1663 4.0863 13.9782 4.2955 13.7342 4.3286L13.6663 4.33317H13.1357L12.2823 13.0126C12.1938 13.912 11.4653 14.6065 10.5747 14.6628L10.4577 14.6665H5.54163C4.6379 14.6665 3.87544 14.0095 3.73223 13.1288L3.7171 13.0126L2.86301 4.33317H2.33301C2.07987 4.33317 1.87068 4.14507 1.83757 3.90102L1.83301 3.83317C1.83301 3.58004 2.02111 3.37084 2.26516 3.33774L2.33301 3.33317H5.83301C5.83301 2.13655 6.80307 1.1665 7.99967 1.1665ZM12.131 4.33317H3.86767L4.71229 12.9148C4.75146 13.3129 5.06656 13.6227 5.45691 13.6622L5.54163 13.6665H10.4577C10.8578 13.6665 11.1969 13.3832 11.2745 12.9986L11.2871 12.9148L12.131 4.33317ZM9.16634 6.1665C9.41947 6.1665 9.62867 6.3546 9.66181 6.59866L9.66634 6.6665V11.3332C9.66634 11.6093 9.44247 11.8332 9.16634 11.8332C8.91321 11.8332 8.70401 11.645 8.67087 11.401L8.66634 11.3332V6.6665C8.66634 6.39036 8.89021 6.1665 9.16634 6.1665ZM6.83301 6.1665C7.08614 6.1665 7.29534 6.3546 7.32847 6.59866L7.33301 6.6665V11.3332C7.33301 11.6093 7.10914 11.8332 6.83301 11.8332C6.57987 11.8332 6.37068 11.645 6.33757 11.401L6.33301 11.3332V6.6665C6.33301 6.39036 6.55687 6.1665 6.83301 6.1665ZM7.99967 2.1665C7.38754 2.1665 6.88554 2.63791 6.83687 3.23748L6.83301 3.33317H9.16634C9.16634 2.68884 8.64401 2.1665 7.99967 2.1665Z"
          fill="#7D8082"
        ></path>
      </svg>
    </div>
  );
}

function CloseButton({ handleCloseTab }) {
  return (
    <div onClick={handleCloseTab}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        fill="none"
      >
        <path
          d="M3.66423 3.79466L3.72475 3.72456C3.94664 3.50267 4.29385 3.4825 4.53853 3.66405L4.60863 3.72456L10 9.11567L15.3914 3.72456C15.6355 3.48049 16.0312 3.48049 16.2753 3.72456C16.5194 3.96864 16.5194 4.36437 16.2753 4.60845L10.8842 9.99984L16.2753 15.3913C16.4972 15.6131 16.5174 15.9603 16.3358 16.205L16.2753 16.2751C16.0534 16.497 15.7062 16.5172 15.4615 16.3356L15.3914 16.2751L10 10.884L4.60863 16.2751C4.36455 16.5192 3.96882 16.5192 3.72475 16.2751C3.48067 16.031 3.48067 15.6353 3.72475 15.3913L9.11585 9.99984L3.72475 4.60845C3.50285 4.38655 3.48269 4.03934 3.66423 3.79466Z"
          fill="#111212"
        ></path>
      </svg>
    </div>
  );
}

function CheckoutButton({ cartItems }) {
  return (
    <>
      {cartItems.length > 0 ? (
        <button>THANH TOÁN</button>
      ) : (
        <button>TIẾP TỤC MUA HÀNG</button>
      )}
    </>
  );
}
export default ShoppingCartTab;
