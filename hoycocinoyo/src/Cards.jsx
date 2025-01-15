import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import bebidas from './assets/Bebidas/bebidas.jsx';
import Card from './Card.jsx';
 


function Cards (){
const {tarjeta} = useParams()
const mapbebidas = bebidas

return (<div>

<h1>Las {tarjeta || 'No hay valor'} disponibles son </h1>
<div>
        {mapbebidas.map((bebida, index) => (
          <Card
            key={index}
            id={bebida.id}
            
            name={bebida.nombre}
            price={bebida.price}
            categoria={bebida.descripcion}
          />
        ))}
      </div>

</div>)


}
export default Cards;