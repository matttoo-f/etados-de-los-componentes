import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from './Alert';
import { Container } from 'react-bootstrap';


function Formulario() {
  return (
    <>
      <input type="text" placeholder='Nombre' />
      <input type="text" placeholder='tuemail@ejemplo.com' />
      <input type="text" placeholder='Contraseña' />
      <input type="text" placeholder='Verificar contraseña' />
    </>
  );
}

export default Formulario;