import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GitExpertApp = () => {
    
    const [ categorias, setCategorias ] = useState ( ['One Punch', 'Dragon Ball'] );
  
    const onAddCategory = ( newCategoria ) => {
        setCategorias ( [...categorias, newCategoria]);
    }
    return (
        <>
            <h1>GitExpertApp</h1>
            
            <AddCategory 
                onNewCategoria = { (valor) => onAddCategory(valor) }
            />
            <ol>
                { 
                    categorias.map ( (categoria) => {
                        return <li key={categoria}> { categoria } </li>
                    })
                }
            </ol>
                {/* Giph Item */}
        </>
    )
}

export default GitExpertApp
