import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionWishlist from "../../Components/SectionTwo/SectionWishlist";
import styles from './Wishlist.module.scss'
const Wishlist = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://664ef629fafad45dfae1b674.mockapi.io/wishlist")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://664ef629fafad45dfae1b674.mockapi.io/wishlist/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
  };
  return (
    <div>
      <Header />
      <div className={styles.wish}>
        <h1>Wishlist</h1>
      </div>
      <div className={styles.wishy}>
        {data &&
          data.map((item) => (
            <SectionWishlist
              key={item.id}
              item={item}
              remove={() => removeItem(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
