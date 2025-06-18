import { Link, Outlet } from "react-router-dom"
const Layout=()=>{
return(
    <>
    <nav>
    <div>
    <div>
    <Link to="/">Home</Link>    
    </div>
    <div>
    <Link to="/Quienes-Somos">Quienes Somos</Link>
    </div>
    <div>
    <Link to="/productos/">Productos</Link>
    </div>
    <div>
    <Link to="/contacto">Contacto</Link>
    </div>
    </div>
    </nav>
    <Outlet/>
    <footer>
        
    </footer>
    </>
)
}
export default Layout