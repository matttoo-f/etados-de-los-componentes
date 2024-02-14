import { Container } from "react-bootstrap"
import Formulario from "./Formulario"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SocialButtons from './SocialButtons';
import Alert from './Alert'
const Registro = () => {

    return (
        <Card style={{ width: '18rem' }} className='formulario'>
        <Card.Body >
            <Card.Title>Crea una cuenta</Card.Title>

            <SocialButtons 
            face ='<i class="fa-brands fa-facebook"></i>'
            github='<i class="fa-brands fa-github"></i>' 
            linkedin='<FontAwesomeIcon icon="fa-brands fa-linkedin" />'
            />

            <Card.Subtitle className="mb-2 text-muted">O usa tu email para registrarte</Card.Subtitle>
            <Formulario/>
            <Button variant="success">Success</Button>{' '}
            <Alert/>
        </Card.Body>
        </Card>
    )
}
export default Registro