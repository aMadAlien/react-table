import {Outlet, Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import First from "./components/pages/First";
import Data from "./components/pages/Data";
import Nav from "./components/navigation/Nav";
import Second from "./components/pages/Second";

const App = () => {
    return (
        <Fragment>
            <Nav/>
            <Routes>
                <Route index element={<First/>} />
                <Route path="second" element={<Second/>} />
            </Routes>
            <Outlet/>
        </Fragment>

    )
}

export default App;