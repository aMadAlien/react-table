import {Outlet, Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import FirstPage from "./pages/FirstPage";
import Navigation from "./navigation/Navigation";
import SecondPage from "./pages/SecondPage";

const App = () => {
    return (
        <Fragment>
            <Navigation/>
            <Routes>
                <Route index element={<FirstPage/>} />
                <Route path="second" element={<SecondPage/>} />
            </Routes>
            <Outlet/>
        </Fragment>

    )
}

export default App;