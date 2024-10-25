import './App.css'
import Veterinaria from './components/Veterinaria/Veterinaria'
const Caninos = [

  {

    id:1,

    nombre: "Maya",

    edad: 3 + " Años Humanos",

    sexo: "Hembra",

    raza: "Yorkshire",

    tamaño: "Chico",

    imagen: "../public/perrito.jpg",

  },

  {

    id:2,

    nombre: "Firulais",

    edad: 4 + " Años Humanos",

    sexo: "Macho",

    raza: "Chihuahua",

    tamaño: "Chico",
    imagen: "../public/chihuahua.jpg",


  },

  {

    id:3,

    nombre: "Pipo",

    edad: 5 + " Años Humanos",

    sexo: "Macho",

    raza: "Beagle",

    tamaño: "Chico",

    imagen: "../public/beagle.webp",
  },

  {

    id:4,

    nombre: "Pacha",

    edad: 4 + " Años Humanos",

    sexo: "Hembra",

    raza: "Husky",

    tamaño: "Mediano",

    imagen: "../public/nena.jpg",
  },

  {

    id: 5,

    nombre: "Hercules",

    edad: 7 + " Años Humanos",

    sexo: "Macho",

    raza: "Pastor Aleman",

    tamaño: "Grande",

    imagen: "../public/pastor_aleman2.jpg",

  }

];
function App() {

  return (
    <>
      <h1>Clientes Caninos de Veterinaria</h1>
      <Veterinaria items={Caninos} />
      
    </>
  )
}

export default App
