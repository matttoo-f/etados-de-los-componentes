import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AlertValidation from './AlertValidation';

function Formulario() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [PassVerify, setPassVerify] = useState('');
  const [Error, setError] = useState(false);
  const [PassMatchError, setPassMatchError] = useState(false);
  const [Success, setSuccess] = useState(false);

  const ChangeName = evento => {
    setName(evento.target.value);
    setError(false); 
  };

  const ChangeEmail = evento => {
    setEmail(evento.target.value);
    setError(false); 
  };

  const ChangePass = evento => {
    setPass(evento.target.value);
    setError(false); 
  };

  const ChangeVerify = evento => {
    setPassVerify(evento.target.value);
    setError(false);
  };

  const Validation = evento => {
    evento.preventDefault();

    if (Name === "" || Email === "" || Pass === "" || PassVerify === "") {
      setError(true); 
      setSuccess(false); 
      return;
    }

    if (Pass !== PassVerify) {
      setPassMatchError(true); 
      setSuccess(false);
      return;
    }

  
    setError(false);
    setPassMatchError(false); 
    setSuccess(true);

  };

  return (
    <>
      <Form onSubmit={Validation}>
        <Form.Control type="text" placeholder="Nombre" onChange={ChangeName} />
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={ChangeEmail} />
        <Form.Control type="password" placeholder="Contraseña" onChange={ChangePass} />
        <Form.Control type="password" placeholder="Verificar contraseña" onChange={ChangeVerify} />
        <Button type="submit" variant="success">Registrarse</Button>{' '}
        {(Error || PassMatchError) && <AlertValidation variant="danger">¡Error! Verifica los campos.</AlertValidation>}
        {Success && <AlertValidation variant="success" success={true} />}
      </Form>
    </>
  );
}

export default Formulario;
