import { createContext, useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

const PokemonContext = createContext()

export const PokemonProvider = ({children}) => {
// estado inicial 0 de carga de pokemons 
const [offset, setOffset] = useState(0)
// Almaceno los 50 pokemones
const [allPokemons, setAllPokemons] = useState([])
// almaceno a todos los pokemones
const [globalPokemons, setGlobalPokemons] = useState([])
// estado para el loader 
const [loader, setLoader] = useState(true)

// Utilizar hook useForm para extraer 
const {valueSearch, onInputChange, onResetForm} = useForm({valueSearch: ''})


// llamar los primeros 50 pokemones 
const getAllPokemons = async (limit=50) => {
    const baseUrl = "https://pokeapi.co/api/v2/"
    const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`)
    const data = await res.json()
    
    const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })

    const results = await Promise.all(promises)
    setAllPokemons([
        ...allPokemons,
        ...results
    ])
    setLoader(false)
}

// obteniendo todos los pokemons 
const getGlobalPokemons = async () => {
    const baseUrl = "https://pokeapi.co/api/v2/"
    const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`)
    const data = await res.json()
    
    const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })

    const results = await Promise.all(promises)
    setGlobalPokemons(results)
    setLoader(false)
}

// llamar a un pokemon por su ID 
const getPokemonById = async (id) => {
    const baseUrl = "https://pokeapi.co/api/v2/"

    const res = await fetch(`${baseUrl}pokemon/${id}`)
    const data = await res.json()
    return data
}

// llamo funcion getAllPokemons
useEffect(() => {
  getAllPokemons()
},[offset])

// llamo la funcion getGlobalPokemons 
useEffect(() => {
  getGlobalPokemons()
},[])

// Funcion de carga mas 
const cargaMasPokemones = () => {
    setOffset(offset + 50)
}

const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    walter: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false
})
const [filteredPokemon, setFilteredPokemon] = useState([])

const handleCheckbox = e => {
    setTypeSelected({
        ...typeSelected,
        [e.target.name]: e.target.checked
    })

    if(e.target.checked){
        const filteredResults = globalPokemons.filter((pokemon) => pokemon.types.map((type) => type.type.name).includes(e.target.name))
        setFilteredPokemon([...filteredPokemon, ...filteredResults])
    }else{
        const filteredResults = filteredPokemon.filter((pokemon) => !pokemon.types.map((type) => type.type.name).includes(e.target.name))
        setFilteredPokemon([ ...filteredResults])
    }
}

    return (
        <PokemonContext.Provider 
        value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonById,
                cargaMasPokemones,
                loader,
                handleCheckbox,
                filteredPokemon
            }}>
                 
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContext