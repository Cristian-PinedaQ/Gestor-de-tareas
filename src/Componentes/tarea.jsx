import React from "react";
import '../stylesheets/Tarea.css'
import { AiOutlineCheckSquare } from "react-icons/ai";

function Tarea({id ,texto, completada, completarTarea, eliminarTarea}) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : "tarea-contenedor"}>
      <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
      <AiOutlineCheckSquare className="tarea-icono" />
      </div>
    </div>
    
  )
}

export default Tarea