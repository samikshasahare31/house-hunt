import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPages from "./pages/LoginPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPages/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
