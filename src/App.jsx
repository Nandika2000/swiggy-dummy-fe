import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <BrowserRouter>
      <Routes>
          <Route path="/"element={<HomePage />}/>
          <Route path="/menu/:restId" element = {<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
