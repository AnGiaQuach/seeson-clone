import data from "../data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/DisplayItem.module.css";
import AddToCartButton from "./AddToCartButton";

function DisplayItem({ id }) {
  const item = data.find((item) => {
    return item.id === parseInt(id);
  });

  return (
    <div className={styles.Display}>
      <img src={`${item.img}`} alt="glasses" />
      <div className={styles.Info}>
        <div>{item.name}</div>
        <div>
          {item.price} {item.currency}
        </div>

        <div className={styles.Description}>{item.description}</div>
        <div></div>
        <AddToCartButton product={item}></AddToCartButton>
      </div>
    </div>
  );
}

export default DisplayItem;
