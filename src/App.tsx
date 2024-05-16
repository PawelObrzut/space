import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './routes/HomePage';
import DestinationPage from './routes/DestinationPage';
import CrewPage from './routes/CrewPage';

function App() {

  return (
    <>
      <a href="#main" className='skip-to-content'>Skip to content</a>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/destination' element={<DestinationPage />}></Route>
          <Route path='/crew' element={<CrewPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
