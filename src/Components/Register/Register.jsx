import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-[90vh] bg-base-200 mt-5 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card w-full  shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered w-96"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered w-96"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-sm text-center px-3 pb-5">
                        Have any account?{" "}
                        <NavLink className={"btn btn-link"} to={"/login"}>
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
