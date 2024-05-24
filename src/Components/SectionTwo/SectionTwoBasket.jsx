import React from "react";
import styles from "./SectionTwo.module.scss";
const SectionTwoBasket = ({item, remove}) => {
  return (
    <div className={styles.cards}>
      <img src={item.thumbnail} alt="" />
      <div className={styles.desc}>
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <span>{item.price}</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
};

export default SectionTwoBasket;
