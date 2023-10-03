import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-red-300 rounded-b-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl font-bold">
                        Privet Route
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-base font-semibold">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/login"}>Log In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
