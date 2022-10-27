import ItemListContainer from "../../Components/Home/ItemListContainer/ItemListContainer.js"
import './Home.css';
import NavBar from '../../Components/Home/NavBar/NavBar.js';
import Jsonapi from "../../APIRest/Jsonapi.js"



function App() {
  return (
        <div>
          <NavBar />
          <ItemListContainer />
        </div>

  );
}

export default App;
