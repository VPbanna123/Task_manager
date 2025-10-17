import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllTodo from "./components/AllTodo";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/allTodo" element={<AllTodo/>}/>
            {/* redirect unknown path */}
            <Route path="*" element={<Navigate to ="/"/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;
