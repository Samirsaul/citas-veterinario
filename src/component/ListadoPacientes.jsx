import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setEditar, eliminarPaciente }/*PASANDP POR PROS!*/ ) => {
    //JUSTO AQUI SE ESCRIBEN LAS HOOKS

    const llenoVacio = pacientes.length === 0 ? "No hay pacientes" : "listado Pacientes"
    const administra = pacientes.length === 0 ? "Comienza agregando pacientes " : "Admistra tus "
    const citas= pacientes.length === 0 ? "y apareceran en este lugar" : "Pacientes y Citas"
    //EL METODO DE ARRIBA NO ESTA EN EL VIDEO DEL CURSO REACT, EL METODO DE ARRIBA ES PROPIO
    return (

        <div className="  mt-10 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <div className="sticky top-0 color bg-gray-200">
            <h2 className=" font-black text-3xl text-center">{llenoVacio}</h2>
            <p className=" text-xl mt-5 mb-10 text-center">{administra}{""}
                <span className="text-indigo-600 font-bold">{citas}</span>
            </p>
            </div> 

            {pacientes.map(pacientes => (
                <Paciente
                    key={pacientes.id}
                    pacientes={pacientes} //PROPS!
                    setEditar={setEditar}
                    eliminarPaciente={eliminarPaciente}
                />)
            )}
        </div>
    )
}
export default ListadoPacientes
