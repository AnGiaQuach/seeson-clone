import styles from "../styles/Logo.module.css";

function Logo() {
  return (
    <div className={styles.Logo}>
      <img
        src={`https://cdn.shopify.com/s/files/1/0448/3081/8454/files/LOGO.svg?v=1668586881`}
        className={styles.Img}
      />
    </div>
  );
}

export default Logo;
