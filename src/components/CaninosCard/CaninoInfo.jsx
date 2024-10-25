import styles from './CaninoInfo.module.css'
export default function CaninoInfo({ estado }) {
    return (
        <div className={styles['Caninos-card']} >
            {/* falta agregar la imagen aqui */}
            <h2>{estado.nombre}</h2>
            <hr />
            <li>
                <p><strong>Edad:</strong> {estado.edad}</p>
                <p><strong>Sexo:</strong> {estado.sexo}</p>
                <p><strong>Raza:</strong> {estado.raza}</p>
                <p><strong>Tamaño:</strong> {estado.tamaño}</p>
            </li>
            <hr />
            <button className='Btn'>Imagen</button>
        </div>
    )
}
