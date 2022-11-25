import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Cont from "./components/Cont";

function App() {
  return (
      <>
          <Navbar />
          <div className="App">
              <Routes>
                  <Route path='/cont' element={<Cont/>}></Route>
              </Routes>
          </div>
      </>

  );
}

export default App;
