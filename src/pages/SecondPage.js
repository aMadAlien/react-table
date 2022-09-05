import Data from "../components/Data";
import Table from "../components/Table";

const SecondPage = () => {
    const PAGE_NUMBER = 2;
    const columns = Table({PAGE_NUMBER});
    return (
        <Data columns={columns}/>
    )
}

export default SecondPage;