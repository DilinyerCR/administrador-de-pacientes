import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import type { Patient } from "../types/types"
import PatientDetailItem from "./PatientDetailItem"


type PatientDetailsProps = {
    patient: Patient
}

const PatientDetails = ({patient} : PatientDetailsProps) => {

    const { deletePatient, getPatientById } = usePatientStore() //! Estado Global.
    
    const handleClick = () => {
        deletePatient(patient.id)
        toast.error("Paciente Eliminado")
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            {/* <PatientDetailItem label="ID" data={patient.id}/> */}
            <PatientDetailItem label="Nombre" data={patient.name}/>
            <PatientDetailItem label="Propietario" data={patient.caretaker}/>
            <PatientDetailItem label="Email" data={patient.email}/>
            <PatientDetailItem label="Fecha Alta" data={patient.date.toString()}/>
            <PatientDetailItem label="Sintomas" data={patient.symptoms}/>

            <div className="flex flex-col gap-3 lg:flex-row justify-between mt-10">
                <button
                    type="button"
                    onClick={() => getPatientById(patient.id)}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg cursor-pointer"
                >
                    Editar
                </button>

                <button
                    type="button"
                    onClick={handleClick}
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientDetails