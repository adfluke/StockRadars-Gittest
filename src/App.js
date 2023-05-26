import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Data from './data';
import Form from './form';
import './App.css';

const Page = () => {
  return (
    <div>
    </div>
  );
};
const App = () => {
  return (
    <Router>
        <h4>
            <button><Link to="/data">Go to Part I</Link></button>
            <button><Link to="/form">Go to Part II</Link></button>
        </h4>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/data" element={<Data />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
