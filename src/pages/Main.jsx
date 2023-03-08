import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Main = () => {

    return (
        <div>
            <Header />
            <SearchBar />
            <Outlet />
        </div>
    )
}

export default Main;