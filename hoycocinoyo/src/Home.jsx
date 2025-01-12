import { Link } from "react-router-dom";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaBeerMugEmpty, FaBottleWater } from "react-icons/fa6";
import { FaWineGlassAlt, FaGlassWhiskey, FaWineBottle } from "react-icons/fa";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.cardContainer}>
      <Link to="/inicio/Bebidas">

      <div className={styles.card}>
        <div className={styles.cardTitle}>Tragos</div>
        <FaMartiniGlassCitrus className={styles.icon} />
      </div></Link>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Cervezas</div>
        <FaBeerMugEmpty className={styles.icon} />
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Botellas</div>
        <FaWineBottle className={styles.icon} />
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Vinos</div>
        <FaWineGlassAlt className={styles.icon} />
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Shots</div>
        <FaGlassWhiskey className={styles.icon} />
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Sin Alcohol</div>
        <FaBottleWater className={styles.icon} />
      </div>
    </div>
  );
}

export default Home;