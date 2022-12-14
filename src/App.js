import "./App.css";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Info from './Pages/Info';
import Register from './Pages/Register';
import Nav from './Resources/myroutes';
import Home from './Pages/home';

function App() {
  return (

      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Info/:id" element={<Info/>} />
        </Routes>
      </div>

  );
} export default App;