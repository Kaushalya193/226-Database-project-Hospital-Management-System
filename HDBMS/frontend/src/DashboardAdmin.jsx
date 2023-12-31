import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet } from "react-router-dom"
import { useState } from 'react';
import './DashboardAdmin.css'; // Import the CSS file for styles



function DashboardAdmin(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
      setIsSidebarOpen((prevState) => !prevState);
  };
  
  return (
      <div className={`container-fluid ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ backgroundImage: "url('images/admin.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="row">
          {/* Sidebar */}
          <div className="col-auto col-md-5 col-xl-2 px-sm-2 px-0 bg-lightblue sidebar" style={{ backgroundColor: 'lightblue' }}>
            <div className="d-flex flex-column align-items-start px-3 pt-2 min-vh-100">
              {/* Menu Link */}
              <div className="d-flex align-items-center pb-3 mb-md-1 me-md-auto" style={{ color: 'white', fontSize: '30px' }}>
                <span className="fs-5 d-none d-sm-inline" ><b>Menu</b></span>
                <button className="btn btn-link d-sm-none"  onClick={handleSidebarToggle}>
                  <i className="bi bi-x"></i>
                </button>
              </div>

                {/* Sidebar Navigation */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                    {/* Add Patient */}
                    <li>
                        <Link to="/DashboardAdmin" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-person-plus" style={{ color: ' #042e5b', backgroundColor: 'white', padding: '2px', borderRadius: '20px' }}></i> <span className="ms-1 d-none d-sm-inline text-#042e5b" style={{ color: ' #042e5b', fontSize: '18px' }} ><b>Add Doctor</b></span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/DashboardAdmin/addNurse' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-person-plus" style={{ color: ' #042e5b', backgroundColor: 'white', padding: '2px', borderRadius: '20px' }}></i> <span className="ms-1 d-none d-sm-inline text-#042e5b" style={{ color: ' #042e5b', fontSize: '18px' }}><b>Add Nurse</b></span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/DashboardAdmin/addReceptionist' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-person-plus" style={{ color: ' #042e5b',backgroundColor: 'white', padding: '2px', borderRadius: '20px' }}></i> <span className="ms-1 d-none d-sm-inline text-#042e5b" style={{ color: ' #042e5b', fontSize: '18px' }}><b>Add Receptionist</b></span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/DashboardAdmin/Details' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-info-circle" style={{ color: ' #042e5b', backgroundColor: 'white', padding: '2px', borderRadius: '20px' }}></i> <span className="ms-1 d-none d-sm-inline text-#042e5b" style={{ color: ' #042e5b', fontSize: '18px' }}><b>Details</b></span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/DashboardAdmin/Help' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-book" style={{ color: ' #042e5b', backgroundColor: 'white', padding: '2px', borderRadius: '20px' }}></i> <span className="ms-1 d-none d-sm-inline text-#042e5b" style={{ color: ' #042e5b', fontSize: '18px' }}><b>Help</b></span>               
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="nav-link px-0 align-middle">
                             <i className="fs-4 bi-power" style={{ color: ' #042e5b', backgroundColor: 'white', padding: '2px', borderRadius: '20px' }}></i> <span className="ms-1 d-none d-sm-inline text-#042e5b" style={{ color: ' #042e5b', fontSize: '18px' }}><b>Logout</b></span>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
        <div className="col py-3 position-relative">
          {/* Toggle Sidebar Button */}
          <button className="btn btn-info d-sm-none toggle-sidebar-button" onClick={handleSidebarToggle}>
            <i className={`bi bi-${isSidebarOpen ? 'arrow-left' : 'arrow-right'}`}></i>
          </button>

          {/* Content area */}
          <div className="p-3 d-flex justify-content-center " >
            <h3 className="text-lightblue" style={{ color: '#042e5b', fontSize: '30px', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} ><b>ADMINISTRATOR MANAGEMNT</b></h3>
          </div>
          <Outlet />
        </div>
    </div>
</div>


 
    )
}

export default DashboardAdmin