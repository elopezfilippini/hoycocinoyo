import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import bebidas from './assets/Bebidas/bebidas.jsx';
import Cards from './Cards.jsx';
import { CgMathMinus } from "react-icons/cg";
import styles from './Card.module.css';



function Card({ id, nombre, precio,categoria}){



    return (

<div>
    <h2>{nombre}</h2>
    <h2>{categoria}</h2>
    <div className={styles.buttonSelection}>
              <button
                className={styles.subtractButton}
                
              >
                <CgMathMinus />
              </button>
              {/* <p className={styles.quantity}>{quantity}</p> */}
              <button className={styles.addButton} >
                +
              </button>
            </div>
</div>





    )
}
export default Card;