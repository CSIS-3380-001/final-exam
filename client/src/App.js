import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/create-book" element={<AddBook />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;