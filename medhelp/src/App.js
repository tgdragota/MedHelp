import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Programare from "./pacient/Programare"

function App() {
  return (
      <>
          <Navbar />
          <div className="App">
              <Routes>
                  <Route path='/programare' element={<Programare/>}></Route>
              </Routes>
          </div>
      </>

  );
}

export default App;
