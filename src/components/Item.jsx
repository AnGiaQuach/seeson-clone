import styles from "../styles/Item.module.css";
import { Link } from "react-router-dom";

function Item({ id, name, price, currency, description, img }) {
  return (
    <div className={styles.Item}>
      <Link to={`/product/${id}`}>
        <img src={img} />
      </Link>

      <div className={styles.ItemTitle}>{name}</div>
      <div className={styles.ItemPrice}>
        {price} {currency}
      </div>
    </div>
  );
}

export default Item;
