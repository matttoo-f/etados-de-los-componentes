import Alert from 'react-bootstrap/Alert'

const AlertValidation = ({ variant, success }) => {
  return (
    <Alert key={variant} variant={variant}>
      {success ? '¡Se ha registrado exitosamente!' : '¡Error! Verifica los campos.'}
    </Alert>
  )
}

export default AlertValidation
