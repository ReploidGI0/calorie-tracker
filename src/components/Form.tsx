import { categories } from "../data/categories"
import { ActivityActions, ActivityState } from "../reducers/activity-reducer"
import { Activity } from "../types"
import { useState, ChangeEvent, Dispatch, useEffect} from "react"
import { v4 as uuidv4} from 'uuid'

type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export default function Form({ dispatch, state }: FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.activeId){                                 //Act-De Reducer
            const selectedActivity = state.activities.filter( stateActivity => 
                stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId])

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: "save-activity", payload: { newActivity: activity } })

        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        <form
            className="space-y-5 bg-gray-800 shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold text-white">Categoria:</label>
                <select
                    className="border-gray-300 p-2 rounded-lg w-full bg-slate-100"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >

                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}

                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold text-white">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="border bg-slate-100 p-2 rounded-lg"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold text-white">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="border bg-slate-100 p-2 rounded-lg"
                    placeholder="Calorias Ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-900 hover:bg-gray-950 w-full p-2 font-bold uppercase 
            text-white cursor=pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                disabled={(!isValidActivity())}
            />
        </form>
    )
}
