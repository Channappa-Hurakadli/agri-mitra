import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow bg-success-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://cdn-icons-png.flaticon.com/512/500/500477.png" className="icon" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(evt)=>props.handleClick(evt,"about")}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={(evt)=>props.handleClick(evt,"services")} href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={(evt)=>props.handleClick(evt,"contact")} href="#">Contact</a>
                            </li>
                            
                        
                        </ul>
                        <ul className="d-flex gap-5 mt-2 ">
                        <a href=""><img src="/public/panelicon.webp" alt="" className='panel'/></a>
                        <i type="button" className="fa-solid fa-language fa-lg align-content-center"></i>
                        <i type="button" className="fa-solid fa-user fa-lg align-content-center"></i>
                        <button type="button" className="btn btn-primary align-content-center"><Link to="/login">login</Link></button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
