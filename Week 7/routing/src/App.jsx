import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {

  return (
    <div>
      <div style={{background: "red", color:"black"}}>
        Fixed bar
        </div>
        <button onClick={() => {
          window.location.href = "/dashboard"
        }}>Dashboard</button>

        <button onClick={() => {
          window.location.href = "/"
        }}>Landing</button>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App
