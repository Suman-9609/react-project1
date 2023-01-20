import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './component/Main';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
