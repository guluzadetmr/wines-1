import React from "react";
import styles from "./SectionTwo.module.scss";
const SectionTwo = ({item,addcart,addwish}) => {
  return (
    <div className={styles.cards}>
      <img src={item.thumbnail} alt="" />
      <div className={styles.desc}>
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <span>{item.price} AZN</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={addcart}>Add To Basket</button>
        <button onClick={addwish}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default SectionTwo;
