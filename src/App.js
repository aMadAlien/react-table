import {Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import First from "./components/pages/First";
import Second from "./components/pages/Second";
import Nav from "./components/navigation/Nav";

const App = () => {
    return (
        <Fragment>
            <Nav/>
            <Routes>
                <Route index element={<First/>} />
                <Route path="/second" element={<Second/>} />
            </Routes>
        </Fragment>

    )
}

export default App;