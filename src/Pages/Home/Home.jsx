import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionOne from "../../Components/SectionOne/SectionOne";
import SectionTwo from "../../Components/SectionTwo/SectionTwo";
import axios from "axios";
import styles from "./Home.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import SectionThree from "../../Components/SectionThree/SectionThree";
import SectionFour from "../../Components/SectionFour/SectionFour";
import SectionFive from "../../Components/SectionFive/SectionFive";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToBasket = (product) => {
    axios
      .get("https://664ef629fafad45dfae1b674.mockapi.io/basket")
      .then((res) => {
        const db = res.data;
        const existingData = db.find((item) => item.id == product.id);
        if (existingData) {
          axios.put(
            `https://664ef629fafad45dfae1b674.mockapi.io/basket/${existingData.id}`,
            { ...existingData, count: existingData.count + 1 }
          );
        } else {
          axios.post(`https://664ef629fafad45dfae1b674.mockapi.io/basket`, {
            ...product,
            count: 1,
          });
        }
      });
  };
  const addToWish = (item) => {
    axios
      .get("https://664ef629fafad45dfae1b674.mockapi.io/wishlist")
      .then((res) => {
        const db = res.data
      const existingFile = db.find(x => x.id == item.id)
      if(existingFile){
        alert('It is already there') 
      } else{
        axios.post('https://664ef629fafad45dfae1b674.mockapi.io/wishlist', item)
      }
    })
  }

  return (
    <div>
      <Header />
      <SectionOne />  
      
      <div className={styles.pro}>
        <h1>OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          perspiciatis!
        </p>
        <span style={{ color: "#960080" }}>
          View All Products <FaLongArrowAltRight />
        </span>
      </div>
      <div className={styles.box}>
        {data &&
          data.map((item) => (
            <SectionTwo
              key={item.id}
              item={item}
              addwish={() => addToWish(item)}
              addcart={() => addToBasket(item)}
            />
          ))}
      </div>
    <SectionThree />
    <SectionFour />
    <SectionFive />
    </div>
  );
};

export default Home;
