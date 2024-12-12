import LogingUser from './components/Authorization/Login';
import SignupUser from './components/Authorization/Signup';
import {Routes,Route}from 'react-router-dom'

function App(){

  return(
    <>
     {/* <LogingUser /> */}
     {/* <SignupUser/>*/}
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<SignupUser/>}/>
        <Route path="/login" element={<LogingUser/>} />
      </Routes>
     </>
  )
}
export default App;