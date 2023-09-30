import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthenticationPage from './majorComponents/AuthenticationPage.tsx'
import Contact from './majorComponents/Contact.tsx'
import Home from './majorComponents/Home.tsx'
import NavigationBar from './majorComponents/NavigationBar.tsx'
import NoPage from './majorComponents/NoPage.tsx'
import Profile from './majorComponents/Profile.tsx'
import Login from './minorComponents/Login.tsx'
import SignUp from './minorComponents/Signup.tsx'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<NavigationBar />}>
          <Route index element={<Home/>}/>
          <Route path='authenticationPage' element={<AuthenticationPage/>}>
            <Route path='logIn' element={<Login/>}/>
            <Route path='signUp' element={<SignUp/>} />
          </Route>
          <Route path='contact' element={<Contact/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
