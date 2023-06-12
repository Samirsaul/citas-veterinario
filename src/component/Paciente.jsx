
const Paciente = ({ pacientes, setEditar, eliminarPaciente /*PASANDO POR PARAMETRO PROPS!*/ }) => {

    const { nombre, propietario, email, alta, sintomas, id } = pacientes // DESTRUCTURING!

    const handleEliminar = () => {
        const respuesta = confirm("esta seguro de eliminar a este paciente?")

        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 my-6 bg-white shadow-xl m-3 px-5 py-10 rounded-xl ">

            <p className="font-bold mb-3 text-gray-800 uppercase"> nombre mascota: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase"> propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase"> email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase"> Fecha de alta: {""}
                <span className="font-normal normal-case"> {alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase"> Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}
                </span>
            </p>

            {/* BOTONES EDITAR ELIMINAR (AL PARECER SE COMENTA EN ESTE SITIO CON EXPRECION JS={})*/}
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white uppercase font-bold"
                    onClick={() => setEditar(pacientes /*pacientes hace referencia a el objeto que se pasa por parametro en el modulo*/)}
                    >
                    editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-lg text-white uppercase font-bold"
                    onClick={handleEliminar}
                    
                    >
                    eliminar
                </button>
            </div>

        </div>
    )
}
export default Paciente
