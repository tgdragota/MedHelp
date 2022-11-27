import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Programare from "./pacient/Programare"
import Cont from "./components/Cont";
import Documente from "./pacient/Documente";
import Fisiere from "./doctor/Fisiere";
import Acasa from "./Acasa";
import Programari from "./doctor/Programari";

function App() {
  return (
      <>
          <Navbar />
          <div className="App">
              <Routes>
                  <Route path='/' exact element={<Acasa/>}></Route>
                  <Route path='/cont' element={<Cont/>}></Route>
                  <Route path='/programare' element={<Programare/>}></Route>
                  <Route path='/documente' element={<Documente/>}></Route>
                  <Route path='/fisiere' element={<Fisiere/>}></Route>
                  <Route path='/programari' element={<Programari/>}></Route>
              </Routes>
          </div>
      </>

  );
}

export default App;
