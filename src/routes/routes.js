import { Routes,Route } from "react-router-dom";
import AddData from "../modules/presentation/pages/addData";
import Home from "../modules/presentation/pages/Home";
import TT from "../modules/presentation/pages/timeTable";
import LandingPage from "../modules/presentation/pages/LandingPage";


function Router(){
    return(
        <Routes>
            <Route path="" element={<LandingPage/>} />
            <Route path="add" element={<AddData/>}/>
            <Route path="generate" element={<Home/>}/>
            <Route path="time-table" element={<TT/>}/>
        </Routes>
    )
}

export default Router;