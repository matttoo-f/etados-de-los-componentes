import Alert from 'react-bootstrap/Alert'


const AlertValidation = ({variant}) => {
    

    return (
        <>
        <Alert key={variant} variant={variant}>
          debes llenar todos los campos
        </Alert>
        </>
    )
}
export default AlertValidation