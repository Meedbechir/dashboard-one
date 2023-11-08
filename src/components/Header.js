import { FaPlay, FaUser, FaCreditCard } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="/"><FaPlay color='blue' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-4">
              <a className="nav-link" href="/">Actors</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link active" href="/about">Projects</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/services">Casting</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/news">Payouts</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/contact">Team</a>
            </li>
          </ul>
          <div className="d-flex me-5">
            <input type="text" className="form-control" placeholder="Search" />
            <FaUser className="mt-1 ms-2"size={32} />
            <FaCreditCard className="mt-1 ms-2" size={32} color='blue'/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
