import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
<Route path='/' element={<Home />} />
<Route path='/Contact' element={<Contact />} />
     </Routes>
     {/* <Home/> */}
     {/* <Contact/> */}

    </div>
    </BrowserRouter>
  );
}

export default App;
