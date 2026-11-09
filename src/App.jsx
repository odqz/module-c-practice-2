import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Orders } from './pages/Orders'
import { Profile } from './pages/Profile'
import { Events } from './pages/Events'
import { AuthRoute } from './components/auth/AuthRoute'
import { GuestRoute } from './components/auth/GuestRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestRoute/>}>
            <Route element={<Register/>} path="/register"></Route>
          </Route>

          <Route element={<GuestRoute/>}>
            <Route element={<Login/>} path="/login"></Route>
          </Route>
          
          <Route element={<AuthRoute/>}>
            <Route element={<Events/>} path="/events"></Route>
          </Route>

          <Route element={<AuthRoute/>}>
            <Route element={<Orders/>} path="/orders"></Route>
          </Route>

          <Route element={<AuthRoute/>}>
            <Route element={<Profile/>} path="/profile"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
