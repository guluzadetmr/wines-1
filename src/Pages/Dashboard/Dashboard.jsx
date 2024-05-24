import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionTwoDash from "../../Components/SectionTwo/SectionTwoDash";
import styles from "./Dashboard.module.scss";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.title.toLowerCase())
  );

  const getData = () => {
    axios
      .get("https://664ef629fafad45dfae1b674.mockapi.io/basket")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    if (sortType) {
      setData((prevData) =>
        [...prevData].sort((a, b) => {
          if (sortType === "asc") {
            return a.little.compare(b.title);
          } else {
            return b.little.compare(a.title);
          }
        })
      );
    }
  }, [sortType]);

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      count: "",
      price: "",
    },

    onSubmit: (values) => {
      axios
        .post(`https://664ef629fafad45dfae1b674.mockapi.io/basket`, values)
        .then((res) => {
          getData();
        });
    },
  });

  const deleteData = (id) => {
    axios
      .delete(`https://664ef629fafad45dfae1b674.mockapi.io/basket/${id}`)
      .then((res) => {
        getData();
      });
  };

  const handleSorted = (type) => {
    setSortType(type);
  };

  return (
    <div>
      <Header />
      <div className={styles.dash}>
        <h1>DashBoard</h1>
      </div>

      <div className={styles.searchbox}>
        <h1>Search for The Product</h1>
        <input
          type="text"
          placeholder="search "
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.sortedBox}>
        <button onClick={() => handleSorted("asc")}>A-Z</button>
        <button onClick={() => handleSorted("desc")}>Z-A</button>
      </div>
      <div className={styles.formBox}>
        <h5>ADD THE PRODUCT</h5>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input
            className={styles.inp}
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input
            className={styles.inp}
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input
            className={styles.inp}
            name="count"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          <input
            className={styles.inp}
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={styles.dashy}>
        {data &&
          data.map((item) => (
            <SectionTwoDash
              key={item.id}
              item={item}
              remove={() => deleteData(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
