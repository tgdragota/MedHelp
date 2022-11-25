import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Programare from "./pacient/Programare"
import Cont from "./components/Cont";

function App() {
  return (
      <>
          <Navbar />
          <div className="App">
              <Routes>
                  <Route path='/cont' element={<Cont/>}></Route>
                  <Route path='/programare' element={<Programare/>}></Route>
              </Routes>
          </div>
      </>

  );
}

export default App;
