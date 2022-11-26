import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Programare from "./pacient/Programare"
import Cont from "./components/Cont";
import Documente from "./pacient/Documente";
import Fisiere from "./doctor/Fisiere";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <>
          <Navbar />
          <div className="App">
              <Routes>
                  <Route path='/cont' element={<Cont/>}></Route>
                  <Route path='/programare' element={<Programare/>}></Route>
                  <Route path='/documente' element={<Documente/>}></Route>
                  <Route path='/fisiere' element={<Fisiere/>}></Route>
                  <Route path='/dashboard' element={<Dashboard/>}></Route>
              </Routes>
          </div>
      </>

  );
}

export default App;
