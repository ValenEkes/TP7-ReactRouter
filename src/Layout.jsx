import { Link, Outlet } from "react-router-dom"
const Layout=()=>{
return(
    <>
    <nav>
    <div>
    <Link to="/">Home</Link>    
    <Link to="/Quienes-Somos">Quienes Somos</Link>
    <Link to="/productos">Productos</Link>

    </div>
    </nav>
    <Outlet/>
    </>
)
}
export default Layout