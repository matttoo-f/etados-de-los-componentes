import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AlertValidation from './AlertValidation';

function Formulario() {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [PassVerify, setPassVerify] = useState('')
  const [Error, setError] = useState(false)

  const ChangeName = (evento)=> {
    setName(evento.target.value)
  }

  const ChangeEmail = (evento)=> {
    setEmail(evento.target.value)
  }

  const ChangePass = (evento)=> {
    setPass(evento.target.value)
  }

  const ChangeVerify = (evento)=> {
    setPassVerify(evento.target.value)
  }
  const Validation = (evento)=>{
     evento.preventDefault()

     if (Name || Email || Pass || PassVerify === ""){
      setError(true)
     }
  }

  return (
    <>
      <Form onSubmit={Validation}>
        <input type="text" placeholder='Nombre' onChange={ChangeName} />
        <input type="text" placeholder='tuemail@ejemplo.com' onChange={ChangeEmail} />
        <input type="text" placeholder='Contraseña' onChange={ChangePass} />
        <input type="text" placeholder='Verificar contraseña' onChange={ChangeVerify} />
        <Button  type='submit' variant="success">Registrarse</Button>{' '}
        {Error ? <AlertValidation variant = 'danger'/> : null }
      </Form>

    </>
  );
}

export default Formulario;