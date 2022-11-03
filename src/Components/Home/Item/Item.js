import { Link } from "react-router-dom";
// import Apirest from "../APIrest/Apirest.js"

// const ItemContainer = () => {
//     return (
//         <div className="contenedor" key={i}>
//             <div>{titulo.titulo}<div />
//                 <img src={titulo.imagen} />
//                 <div> {titulo.texto} </div>
//             </div>
//             )
// }
const Item = () => {
    return (
            <div className="muñecos">
                <div className="muñecoUno">
                    <Link>
                        <img className="muneco1" src="img/img4.jpg"></img>
                        <h2>Muñeco Uno</h2>
                        <p>Muñeco numero uno, texto</p>
                    </Link>
                </div>
                <div className="muñecoUno">
                    <Link>
                        <img className="muneco1" src="img/img8.jpg"></img>
                        <h2>Muñeco Dos</h2>
                        <p>Muñeco numero dos, texto</p>
                    </Link>
                </div>
                <div className="muñecoUno">
                    <Link>
                        <img className="muneco1" src="img/img9.jpg"></img>
                        <h2>Muñeco Tres</h2>
                        <p>Muñeco numero tres, texto</p>
                    </Link>
                </div>
                <div className="muñecoUno">
                    <Link>
                        <img className="muneco1" src="img/img10.jpg"></img>
                        <h2>Muñeco Cuatro</h2>
                        <p>Muñeco numero cuatro, texto</p>
                    </Link>
                </div>
                <div className="muñecoUno">
                    <Link>
                        <img className="muneco1" src="img/img11.jpg"></img>
                        <h2>Muñeco Cinco</h2>
                        <p>Muñeco numero cinco, texto</p>
                    </Link>
                </div>
            </div>

            )
};

            export default Item;