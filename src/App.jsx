import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./componets/Home";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage"

export default function App(){
  return(
    <>
<BrowserRouter>
  <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/login"element={<Loginpage/>}/> 
    <Route path="/register"element={<Registerpage/>}/> 
  </Routes>
</BrowserRouter>

    </>
  )
}
