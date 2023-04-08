import {useState} from "react"
import Producto from "./Producto"

const ProductosContainer = () => {


    const [valor, setValor ] = useState(1)

    const handleClick = () => {
        console.log("hola")
        
        setValor(valor + 1)
    }




    return(
        <>
        <p>{valor}</p>
        <button id="btn" onClick={handleClick}>click</button>



        {/*<Producto/>*/}
       </> 
    )
}

export default ProductosContainer