import { useEffect, useState } from "react";
import styles from "../styles/MenuTitle.module.css";

function MenuTitle({ title, listOfSubtitles, itemStyle, setIsHover, isHover }) {
  const [localHover, setLocalHover] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsHover(true);
          setLocalHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setLocalHover(false);
        }}
        className={`${itemStyle} ${styles.MenuTitle}`}
      >
        {" "}
        {title}
        {isHover && localHover && (
          <ul className={` ${styles.CenterMenu}`}>
            {listOfSubtitles.map((subTitle) => {
              return (
                <li key={subTitle.title} className={styles.Opt}>
                  {subTitle.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MenuTitle;
