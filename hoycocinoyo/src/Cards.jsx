import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import bebidas from './assets/Bebidas/bebidas.jsx';

 


function Cards (){
const {tarjeta} = useParams()
const mapbebidas = bebidas

return (<div>

<h1>Las {tarjeta || 'No hay valor'} disponibles son </h1>
<div>
   { mapbebidas.map((bebida)=>
   <div>
   <h1>{bebida.nombre}</h1>
   <h1>${bebida.precio}</h1></div>)}
</div>

</div>)


}
export default Cards;