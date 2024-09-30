import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div class='container-fluid '>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid  d-flex flex-row justify-content-between">
                    <div>
                        <a class="navbar-brand text-white" href="#">Navbar</a>
                    </div>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end bg-secondary " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Navbar</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                        </div>
                        <div class="offcanvas-body" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end text-black ">
                                <li class="nav-item">
                                    <Link to="/home" class=" text-white nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" class=" text-white nav-link" href="#">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/card' class=" text-white nav-link " href="#" role="button" >Projects</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link to='/' class="  text-white nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Project List</Link>
                                    <ul class="dropdown-menu bg-success">
                                        <li><Link to='/Calculator' class="dropdown-item text-black fw-medium" href="#">Calculator</Link></li>
                                        <li><Link to='/Todolist' class="dropdown-item text-black fw-medium" href="#">Todo List</Link></li>
                                        <li><Link to='/RockPaperScissor' class="dropdown-item text-black fw-medium" href="#">RockPaperScissor</Link></li>
                                        <li><Link to='/LoanCalculator' class="dropdown-item text-black fw-medium" href="#">Loan Calculator</Link></li>
                                        <li><Link to='/Weather' class="dropdown-item text-black fw-medium" href="#">Weather App</Link></li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
