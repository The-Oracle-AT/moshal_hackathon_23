import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './majorComponents/Contact.tsx'
import LandingPage from './majorComponents/LandingPage.tsx'
import NoPage from './majorComponents/NoPage.tsx'
import SignInPage from './majorComponents/SignInPage.tsx'
import LandingNavBar from './minorComponents/LandingNavBar.tsx'
import Login from './minorComponents/Login.tsx'
import Profile from './minorComponents/Profile.tsx'
import SignUp from './minorComponents/SignUp.tsx'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<LandingNavBar />}>
          <Route index element={<LandingPage/>}/>
          <Route path='signInPage' element={<SignInPage/>}>
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