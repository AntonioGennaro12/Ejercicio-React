import { useEffect, useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'

function Tarjeta ({nombrePokemon}) {
    
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("def nombre");
    const [linkImagen, setLinkImagen] = useState("def img");
    
    useEffect (()=>{
      async function fetchApi() {
        const res = await fetch("http://pokeapi.co/api/v2/pokemon/"+nombrePokemon);
        let info = "def info";
        console.log("fetch");
        if (res.ok){
          info = await res.json();
          setNombre(info.name);
          setLinkImagen(info.sprites.front_default);
        }
      }
      fetchApi();
    }); 
      
return (
    <>
    <h1>{nombre}</h1>
    <button onClick={()=>{
      setContador(contador+1);
      setNombre("otro nombre");
    }}>Aumentar</button>
    <img src={linkImagen} alt={linkImagen} />
    <h2>{contador}</h2>
    </>
    )
}

export default Tarjeta;