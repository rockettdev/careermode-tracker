import { Route, Routes } from "react-router-dom"
import Home from './Components/Home/index.js'
import Teams from './Components/Teams/index.js'
import ClubView from "./Components/ClubView/index.js";

function App() {


  return (
    <Routes>
        <Route
          path='/'
          element={<Home />}
          />
          <Route
          path='teams'
          element={<Teams />}
          />
          <Route
          path='teams/:id'
          element={<ClubView />}
          />
      </Routes>
  );
}

export default App;
