import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware' //esto es solo para ver los estados de zustand en el navegador con Redux DevTools
import { v4 as uuidv4 } from 'uuid'
import type { DraftPatient, Patient } from '../types/types'

export type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data : DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient : DraftPatient) : Patient => {
    return {...patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>()(
    devtools( //Este devtools es parte del proceso para ver los estados de zustand en el navegador con Redux DevTools
        persist((set) => ({ //funcion de zustand para la persistencia de datos en localstorage
            patients: [], //Esto es un estado global llamado "patients"
            activeId: '',
            addPatient: (data) => {
                const newPatient = createPatient(data)
                set((state) => ({
                    patients: [...state.patients, newPatient]
                }))
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },
            getPatientById: (id) => {
                set(() => ({
                    activeId: id,
                }))
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
                    activeId: ''
                }))
            }
        }), {
            name: 'patient-storage'
        })
    )
)









// // Importa la función 'create' de la biblioteca 'zustand'.
// // 'zustand' es una pequeña y rápida librería de manejo de estado.
// import { create } from 'zustand'

// // Importa el type Patient' desde su ruta. Este type define la estructura de un objeto patient (ej: id, nombre, caretaker, etc).
// import type { DraftPatient, Patient } from '../types/types'

// // Define el type 'PatientState' para describir la estructura del estado global.
// // Este estado contendrá un array de pacientes.
// export type PatientState = {
//     // La propiedad 'patients' es un array que contendrá objetos del tipo 'Patient'.
//     patients: Patient[]
//     addPatient: (data : DraftPatient) => void
// }

// // Crea y exporta el hook de Zustand.
// // El hook 'usePatientStore' permite acceder y modificar el estado de los pacientes.
// // Se le pasa el tipo 'PatientState' para tipar correctamente el estado.
// export const usePatientStore = create<PatientState>(
//     // Función de inicialización que devuelve el estado inicial.
//     () => ({
//         // El estado inicial: un array de pacientes vacío.
//         patients: [],
//         addPatient: (data) => {
//             console.log(data)
//         }
//     })
// )