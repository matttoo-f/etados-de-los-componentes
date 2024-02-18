import Formulario from "./Formulario"
import Card from 'react-bootstrap/Card';
import SocialButtons from './SocialButtons';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {

    return (
       <Container className="container-card d-flex justify-content-center align-items-center">
         <Card style={{ width: '18rem' }}>
        <Card.Body className='d-flex flex-column jystify-content-center align-items-center' >
            <Card.Title>Crea una cuenta</Card.Title>

            <SocialButtons  
            face={<FontAwesomeIcon icon={faFacebook} />}
            github={<FontAwesomeIcon icon={faGithub} />} 
            linkedin={<FontAwesomeIcon icon={faLinkedin} />}
            />

            <Card.Subtitle className="text-primary">
                O usa tu email para registrarte
            </Card.Subtitle>

            <Formulario/>
            
        </Card.Body>
        </Card>
       </Container>
    )
}
export default Registro
