import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {


  return (
    <div>
      <div style={{background: "red", color:"black"}}>
        Fixed bar
        </div>

        {/* Wroung Way to Navigate page */}
        {/* <button onClick={() => {
          window.location.href = "/dashboard"
        }}>Dashboard</button>

        <button onClick={() => {
          window.location.href = "/"
        }}>Landing</button> */}


        {/* Wright way to do this */}

        
    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  )
}
function Appbar(){
const navigate = useNavigate();
  return <div>
  <button onClick={() => {
    navigate("dashboard")
  }}>Dashboard</button>
  <button onClick={() => {
    navigate('/')
  }}>Loadong...</button>  
  </div>

}

export default App
