import { useParams } from "react-router-dom";
import { celulares } from "./Data";
import React, {useState} from 'react'

const Celulares = () => {
  const { marcaId, id } = useParams();
  const[idTelefonos,SetIdTelefonos] =useState([])
  const handleChange = (e) => {
    SetIdTelefonos(e.target.value)
  }
  return (
    <>
    <select value={idTelefonos} onChange={handleChange}>
        <option value="">Todas las marcas</option>
        {celulares.map((e) => (
          <option key={e.id} value={e.id}>
            {e.nombre}
          </option>
        ))}
      </select>
      {celulares
        .filter((c) => {
            if (!marcaId && !id) {
                return true;
            } else if (!id && marcaId == c.marcaId) {
                return true;
            } else if (id && c.id == id) {
                return true;
            } else {
                return false;
            }
        })
        .map((e) => (
          <div>
            <h2>{e.nombre}</h2> <img src={e.fotos[0]} />
          </div>
        ))}
    </>
  );
};
export default Celulares;
