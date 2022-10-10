
import Alert from 'react-bootstrap/Alert';

const ItemListContainer = (greetings) => {
    return (
        <div className="Mensaje">
            <p><Alert variant="success">
                <Alert.Heading>Hola!</Alert.Heading>
                <p>
                    Bienvenido/a la pagina.
                </p>
                <hr />
                <p className="mb-0">
                    Alumno: Rodrigo Spinelli
                </p>
            </Alert>{greetings.msg}</p>
        </div>
    );
}

export default ItemListContainer;