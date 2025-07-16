import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router'
import Home from './pages/Home/Home'
import SignInForm from './pages/signInForm/SignInForm'
import SignUpForm from './pages/signUpForm/SignUpForm'

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/sign-up' element={<SignUpForm/>}></Route>
  <Route path='/sign-in' element={<SignInForm/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
