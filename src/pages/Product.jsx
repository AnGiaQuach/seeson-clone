import Header from "../components/Header";
import Item from "../components/Item";
import DisplayItem from "../components/DisplayItem";
import data from "../data";
import styles from "../styles/Product.module.css";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <>
      <Header></Header>
      {!id ? (
        <div className={styles.Product}>
          {data.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                currency={item.currency}
                description={item.description}
                img={item.img}
              ></Item>
            );
          })}
        </div>
      ) : (
        <DisplayItem id={id}></DisplayItem>
      )}
    </>
  );
}

export default Product;
