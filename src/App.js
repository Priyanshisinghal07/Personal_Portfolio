
import './App.css';
import Home from './Components/Home'
import Work from './Components/Work'
import Project from './Components/Project'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}> </Route>
    
    <Route path='/work' element={<Work/>}></Route>
    <Route path='/project' element={<Project/>}></Route>
     </Routes>
    </BrowserRouter>

 
  );
}

export default App;
