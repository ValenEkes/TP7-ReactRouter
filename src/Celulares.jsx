import { celulares } from "./Data"
const Celulares=()=>{
return(
<>
{
    celulares.map(e => <div><h2>{e.nombre}</h2> <img src={ e.fotos[0] } /></div> ) }
</>
)
}
export default Celulares
