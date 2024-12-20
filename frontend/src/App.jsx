import LoginPage from './components/Authorization/Login';
import SignupForm from './components/Authorization/Signup';
import {Routes,Route}from 'react-router-dom'

function App(){

  return(
    <>
     {/* <LogingUser /> */}
     {/* <SignupUser/>*/}
      <Routes>
        <Route path="/" element ={<h1>Home Page</h1>} />
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
     </>
  )
}
export default App;