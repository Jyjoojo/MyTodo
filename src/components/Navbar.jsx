import { Link } from "react-router";

export function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">MyTodo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/todo" className="nav-link text-white active">Todo</Link>
                        <Link to="/contact" className="nav-link text-white">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
