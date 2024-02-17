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
  const [ErrorMsg, setErrorMsg] = useState('')

  const ChangeName = (event)=> {
    setName(event.target.value)
  }

  const ChangeEmail = (event)=> {
    const email = event.target.value
    setEmail(email)
    
    if (email.includes('@')){
      setError(false)
      setErrorMsg('')
    }else {
      setError(true)
      setErrorMsg('El correo debe contener @')
    }
  }

  const ChangePass = (event)=> {
    setPass(event.target.value)
  }

  const ChangeVerify = (event)=> {
    setPassVerify(event.target.value)
  }
  const Validation = (event)=>{
     event.preventDefault()

     if(!Name || !Email || !Pass || !PassVerify){
      setError(true)
      setErrorMsg('Por favor, completa todos los campos.')
     }else if (Pass !== PassVerify){
      setError(true)
      setErrorMsg('Las contraseñas no coinciden')
     }else {
      setError(false)
      setErrorMsg('¡Registro Exitoso!')
     }

  }

  return (
    <>
      <Form onSubmit={Validation}>
        <Form.Control type="text" placeholder="Nombre" onChange={ChangeName} />
        <Form.Control type="text" placeholder="tuemail@ejemplo.com" onChange={ChangeEmail} />
        <Form.Control type="text" placeholder="Contraseña" onChange={ChangePass} />
        <Form.Control type="text" placeholder="Verificar contraseña" onChange={ChangeVerify} />
        <Button type="submit" variant="success">
          Registrarse
        </Button>{' '}
        {Error && <AlertValidation variant="danger">{ErrorMsg}</AlertValidation>}
      </Form>

    </>
  );
}

export default Formulario;