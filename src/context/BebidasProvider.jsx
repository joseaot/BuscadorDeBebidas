/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'


const BebidasContext = createContext()


const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false)
    const [bebidasId, setBebidasId] = useState(null)
    const [recetas, setRecetas] = useState({})
    const [cargando, setCargando] = useState(false)


    useEffect(()=>{
        setCargando(true)
        const obtenerReceta = async() => {
            if(!bebidasId) return 


            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidasId}`

                const { data } = await axios(url)
                setRecetas(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally{
                setCargando(false)
            }
        }
        obtenerReceta()
    },[bebidasId]) 


    const consultarBebidas = async datos => {
        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }


    const handleModalClick = () =>{
        setModal(!modal)
    }

    const handleBebidasId = id =>{
        setBebidasId(id)
    }
    

    return (
        <BebidasContext.Provider
            value={{
                consultarBebidas,
                bebidas,
                handleModalClick,
                modal,
                handleBebidasId,
                recetas,
                cargando
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext