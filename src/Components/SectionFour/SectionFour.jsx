import React from "react";
import styles from './SectionFour.module.scss'
const SectionFour = () => {
  return (
    <div className={styles.four}>
      <div className={styles.containerf}>
        <div className={styles.card}>
          <div className={styles.all}>
            <div className={styles.photo}>
              <img
                src="https://preview.colorlib.com/theme/wines/images/person_2.jpg"
                alt=""
              />
            </div>
            <div className={styles.text}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero sapiente beatae, nemo quasi quo neque consequatur rem
                porro reprehenderit, a dignissimos unde ut enim fugiat deleniti
                quae placeat in cumque?”
              </p>
              <span style={{color:'rgb(147, 0, 119)'}}>-Levi Morris</span>
            </div>
          </div>

          <div className={styles.all}>
            <div className={styles.photo}>
              <img
                src="https://preview.colorlib.com/theme/wines/images/person_3.jpg"
                alt=""
              />
            </div>
            <div className={styles.text}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero sapiente beatae, nemo quasi quo neque consequatur rem
                porro reprehenderit, a dignissimos unde ut enim fugiat deleniti
                quae placeat in cumque?”
              </p>
              <span style={{color:'rgb(147, 0, 119)'}}>-Allie Smiths</span>
            </div>
          </div>

          <div className={styles.all}>
            <div className={styles.photo}>
              <img
                src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
                alt=""
              />
            </div>
            <div className={styles.text}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero sapiente beatae, nemo quasi quo neque consequatur rem
                porro reprehenderit, a dignissimos unde ut enim fugiat deleniti
                quae placeat in cumque?”
              </p>
              <span style={{color:'rgb(147, 0, 119)'}}>-Collin Miller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
