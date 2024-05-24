import React from "react";
import styles from './Header.module.scss'
import Home from "../../Pages/Home/Home";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigation = useNavigate ();



  return (
    <div className={styles.first}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/logo.png"
            alt=""
          />
        </div>
      </div>
      
        <nav className={styles.containerBottom}>
          <ul>
            <li>
              <a href="" style={{color:'#BD519E'}} onClick={() => navigation('/')}>HOME</a>
            </li>
            <li>
              <a href="" onClick={() => navigation('/Basket')}>BASKET</a>
            </li>
            <li>
              <a href="" onClick={() => navigation ('/Wishlist')}>WISHLIST</a>
            </li>
            <li>
              <a href="" onClick={() => navigation ('Dashboard')}>ADMIN PANEL</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Header;
