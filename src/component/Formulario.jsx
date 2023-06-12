import { useState, useEffect } from "react";
import Error from './Error' // POR ALGUNA EXTRAÑA RAZON EL ARCHIVO ESTA EN MINUSCULA Y FUNCIONA;


const Formulario = ({ pacientes, setPacientes, editar, setEditar}) => {
    // ESTO DE ABAJO SON LAS HOOKS
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [alta, setAlta] = useState("");
    const [email, setEmail] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    //USEEFFECT aqui haciendo click en el boton editar lo que se guardo en la lista se devuelve al formulario
    useEffect(() => {
        if (Object.keys(editar).length > 0 ) {

            setNombre(editar.nombre)
            setPropietario(editar.propietario)
            setAlta(editar.alta)
            setEmail(editar.email)
            setSintomas(editar.sintomas)
        }
    }, [editar]);

    //GENERADOR DE ID ALEATORIO
    const id = () => {
        const cod1 = Math.random().toString(36).substring(2);
        const cod2 = Date.now().toString(36)
        return cod1 + cod2
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //VALIDACION
        if ([nombre, propietario, alta, email, sintomas].includes("")) {
            setError(true)
            return;
        }

        setError(false)

        //OBJETO DE PACIENTE PARA USAR EN EL MODIFICADOR
        const objetoPaciente = {
            nombre,
            propietario,
            alta,
            email,
            sintomas
        }
        

        if(editar.id){
            objetoPaciente.id = editar.id
            const pacieteActualizado = pacientes.map( editarState => editarState.id === editar.id ? objetoPaciente : editarState)
            setPacientes(pacieteActualizado)
            setEditar({})

        }else{

            objetoPaciente.id = id();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //ESTO DE ABAJO PARA REINICIAR EL FORMULARIO DESPUES DEL LLENADO (DESPUES DE DAR CLICK A ENVIAR)
        setNombre("")
        setPropietario("")
        setAlta("")
        setEmail("")
        setSintomas("")
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mt-10">
            <h2 className="font-black text-3xl text-center">
                Seguimientos Pacientes
            </h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl py-10 px-5 mb-10">

                {error && <Error>
                    todos los campos deben estar llenos
                </Error>
                }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-800 uppercase font-bold">
                        Nombre mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-800 uppercase font-bold">
                        Nombre propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre de propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-800 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-800 uppercase font-bold">
                        alta paciente
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-800 uppercase font-bold">
                        sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Escribe los Sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-lg"
                    value={editar.id ? "Editar paciente" : "Agregar Paciente"}
                />

            </form>
        </div>
    );
}

export default Formulario;
