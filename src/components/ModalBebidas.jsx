import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


const ModalBebidas = () => {

    const { modal, handleModalClick, recetas, cargando } = useBebidas()

    const mostrarIngredientes = () => {
      let ingredientes = [];


      for(let i=1; i< 16; i++){
        if(recetas [`strIngredient${i}`]){
          ingredientes.push(
            <li key={i}>{recetas[`strIngredient${i}`]} {recetas[`strMeasure${i}`]}</li>
          )
        }
      }
      return ingredientes;

    }

  
  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image 
          src={recetas.strDrinkThumb}
          alt={`Imagen receta ${recetas.strDrink}`}
        />

        <Modal.Header>
          <Modal.Title>{recetas.strDrink}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='p-3'>
            <h2>Instrucciones</h2>
            {recetas.strInstructions}
            <h2>Ingredientes y Cantidades</h2>
            {mostrarIngredientes()}

          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebidas