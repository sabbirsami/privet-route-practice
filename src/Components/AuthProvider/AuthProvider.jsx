import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const data = { name: "Private Route", createUser: createUser };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
};
