import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg nav-hero">
  <Link class="navbar-brand" to="/">Pokedex</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/">Search</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/names">Pokelist</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar