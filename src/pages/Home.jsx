import LeftSideNav from "../LeftSideNav";
import RightSideNav from "../RightSideNav";
import BreakingNews from "./BreakingNews";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 mx-auto">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h3>News Coming SOon</h3>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;