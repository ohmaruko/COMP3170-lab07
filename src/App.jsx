import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Countries from './components/Countries'
import Details from './components/Details'

function App() {

  return (
    <BrowserRouter basename='COMP3170-lab07'>
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/countries' element={<Countries />} >
          <Route path='/countries/:cca2' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
