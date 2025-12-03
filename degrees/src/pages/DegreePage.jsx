import { NavLink, Outlet, useParams } from "react-router-dom";
import './degreepage.css'

const DegreePage = () => {
  const { id } = useParams();

  return (
    <>

    <nav className="nav">
        <NavLink to="menu" className={({ isActive }) => (isActive ? "active" : "")}>
          Menu
        </NavLink>
    </nav>
    
    <br></br> 
    
    <h2>Degree {id}</h2>
    <span>
        {id.name}
        {id.university}
    </span>

      <Outlet />
    </>
  );
};

export default DegreePage;
