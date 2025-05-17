import styles from "../styles/AddToCartButton.module.css";

function AddToCartButton({ product }) {
  const handleClick = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (!cartItems) {
      cartItems = [];
    }

    if (cartItems.find((item) => item.id == product.id)) {
      cartItems = cartItems.map((item) => {
        if (item.id == product.id) {
          item.quantity += 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      return;
    }

    cartItems.push({ ...product, quantity: 1 });
    console.log({ product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <button onClick={handleClick} className={styles.Button}>
      <p>THÊM VÀO GIỎ HÀNG</p>
      <p>
        +{product.price} {product.currency}
      </p>
    </button>
  );
}

export default AddToCartButton;
