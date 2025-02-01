import MenuTitle from "./MenuTitle";
import Title from "./Title";
import styles from "../styles/LeftHeader.module.css";

function LeftHeader({ setIsHover, isHover }) {
  const productSubtitles = [
    { title: "KÍNH CẬN", url: "" },
    { title: "KÍNH RÂM", url: "" },
    { title: "PHỤ KIỆN", url: "" },
  ];

  return (
    <div className={styles.LeftHeader}>
      <Title
        itemStyle={`${styles.Title} ${styles.LeftMostTitle}`}
        title="PROJECT"
      >
        {" "}
      </Title>
      <MenuTitle
        itemStyle={styles.Title}
        title="SẢN PHẨM"
        listOfSubtitles={productSubtitles}
        setIsHover={setIsHover}
        isHover={isHover}
      ></MenuTitle>
      <Title itemStyle={styles.Title} title="VỀ SEESON"></Title>
    </div>
  );
}

export default LeftHeader;
