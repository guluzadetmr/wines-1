import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionTwoBasket from "../../Components/SectionTwo/SectionTwoBasket";
import styles from "./Basket.module.scss";
const Basket = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://664ef629fafad45dfae1b674.mockapi.io/basket")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://664ef629fafad45dfae1b674.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
  };
  return (
    <div>
      <Header />
      <div className={styles.bask}>
        <h1>Basket Products</h1>
      </div>
      <div className={styles.map}>
        {data &&
          data.map((item) => (
            <SectionTwoBasket
              key={item.id}
              item={item}
              remove={() => removeItem(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Basket;
