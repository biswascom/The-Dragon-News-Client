import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Container>
            <Navbar className="navbar navbar-expand-lg">
                <div className="container-fluid bg-body-tertiary">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/career' className="nav-link">Career</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link to='/loginLayout/login' className="btn btn-dark text-white px-5">Login</Link>
                        </span>
                    </div>
                </div>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;