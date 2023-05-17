/* eslint-disable react/prop-types */
import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

  const { handleModalClick, handleBebidasId } = useBebidas()
  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={bebida.strDrinkThumb}
                alt={`Imagen de ${bebida.strDrink}`}
            />

            <Card.Body>
              <Card.Title>{bebida.strDrink}</Card.Title>
              <Card.Text>Algo Mas</Card.Text>
              <Button 
                className='w-100 text-uppercase mt-2' 
                variant={'warning'} 
                onClick={() => {
                  handleModalClick() 
                  handleBebidasId(bebida.idDrink)
                }}  
              >
                Ver receta
              </Button>
            </Card.Body>

        </Card>
    </Col>
  )
}

export default Bebida
