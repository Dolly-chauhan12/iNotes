import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} `} to="/about">About Us</Link>
                            </li>

                        </ul>
                        {!localStorage.getItem("token") ?
                            <form className="d-flex " role="search">
                                <Link className="btn btn-dark btn-lg active mx-2" role="button" aria-pressed="true" to="/login">Login</Link>
                                <Link className="btn btn-light btn-lg active mx-2" role="button" aria-pressed="true" to="/signin">SignIn</Link>
                            </form> : <button className="btn btn-light" onClick={handleLogout}> Logout </button>}


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
