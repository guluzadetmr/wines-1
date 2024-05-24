import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from './SectionFive.module.scss'
const SectionFive = () => {
  return (
    <div className={styles.five}>
      <div className={styles.containeri}>
        <div className={styles.boxes}>
          <div className={styles.basliqqqq}>
            <h1>Wine's Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi, perspiciatis!
            </p>
            <span style={{ color: "#93177B" }}>
              View All Products <FaLongArrowAltRight />{" "}
            </span>
          </div>

          <div className={styles.productlarrrrrrr}>
            <div className={styles.pics}>
              <img
                src="https://preview.colorlib.com/theme/wines/images/img_1.jpg"
                alt=""
              />
              <div className={styles.texto}>
                <h2>What You Need To Know About Premium Rosecco</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi temporibus praesentium neque, voluptatum quam
                  quibusdam.
                </h3>
                <h4>Dave Rogers in News</h4>
              </div>
            </div>
            <div className={styles.pics}>
              <img
                src="https://preview.colorlib.com/theme/wines/images/img_2.jpg"
                alt=""
              />
              <div className={styles.texto}>
                <h2>What You Need To Know About Premium Rosecco</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi temporibus praesentium neque, voluptatum quam
                  quibusdam.
                </h3>
                <h4>Dave Rogers in News</h4>
              </div>
            </div>
            <div className={styles.pics}>
              <img
                src="https://preview.colorlib.com/theme/wines/images/img_3.jpg"
                alt=""
              />
              <div className={styles.texto}>
                <h2>What You Need To Know About Premium Rosecco</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi temporibus praesentium neque, voluptatum quam
                  quibusdam.
                </h3>
                <h4>Dave Rogers in News</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
