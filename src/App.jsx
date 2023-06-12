import { useEffect, useState } from "react";
import Header from "./component/Header";
import Formulario from "./component/Formulario";
import ListadoPacientes from "./component/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]); //ESTO ES HOOKS
  const [editar, setEditar] = useState({}); //ESTO ES HOOKS

  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacienteLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacienteActualizado = pacientes.filter((editar) => editar.id !== id);
    setPacientes(pacienteActualizado);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          editar={editar}
          setEditar={setEditar}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setEditar={setEditar}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
