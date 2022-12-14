import { Link } from "react-router-dom"
import '../App.css'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Moovice</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end fs-1 p-1 " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/popular">Popular</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/weekly">Weekly</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
</nav>
  )
}

export default Header