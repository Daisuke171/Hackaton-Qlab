import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import DegreePage from './pages/DegreePage';
import Overview from './pages/Overview';
import Menu from './pages/Menu';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="degrees/:id" element={<DegreePage />}>
            <Route index element={<Overview />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
