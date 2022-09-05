import Data from "../components/Data";
import Table from "../components/Table";

const FirstPage = () => {
    const PAGE_NUMBER = 1;
    const columns = Table({PAGE_NUMBER});
    return (
        <Data columns={columns} />
    )
}

export default FirstPage;