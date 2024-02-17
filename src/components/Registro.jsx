import Formulario from "./Formulario"
import Card from 'react-bootstrap/Card';
import SocialButtons from './SocialButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {

    return (
        <Card style={{ width: '18rem' }} className='formulario'>
        <Card.Body >
            <Card.Title>Crea una cuenta</Card.Title>

            <SocialButtons 
            face ={<FontAwesomeIcon icon={faFacebook} />}
            github={<FontAwesomeIcon icon={faGithub} />} 
            linkedin={<FontAwesomeIcon icon={faLinkedin} />}
            />

            <Card.Subtitle className="mb-2 text-muted">
                O usa tu email para registrarte
            </Card.Subtitle>

            <Formulario/>
            
        </Card.Body>
        </Card>
    )
}
export default Registro