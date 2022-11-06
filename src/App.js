import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./style.css";
//Import the pages
import Page404 from './Components/Page404';
import ErrorBoundary from './Components/ErrorBoundary';
import Counter from './Components/Counter';
import ReducerCounter from './Components/ReducerCounter';




function App() {
  return (
    <div className="App">
      <Router>
        <div className="list">
          <ul>
          
             
          
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Counter">Counter</Link>
            </li>
            <li>
              <Link to="ReducerCounter">ReducerCounter</Link>
            </li>
            <li>
              <Link to="ErrorBoundary">ErrorBoundary</Link>
            </li>
            
              <li>
               <Link to="Page404">404
               </Link>
               </li>
          </ul>
        </div>

        <Routes>
          
          <Route exact path="/" element={<h1 className="hme">Home Page</h1>} />
          <Route exact path="Counter" element={<Counter />} />
          <Route exact path="ReducerCounter" element={<ReducerCounter />} />
          
          <Route exact path="ErrorBoundary" element={<ErrorBoundary />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}
function Page404() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}

export default App;
