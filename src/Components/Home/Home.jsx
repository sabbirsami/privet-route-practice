import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name);

    return (
        <div className="container mx-auto">
            <div className="navbar bg-indigo-200 rounded-b-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl font-bold">
                        {name}
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
            <Outlet />
        </div>
    );
};

export default Home;
