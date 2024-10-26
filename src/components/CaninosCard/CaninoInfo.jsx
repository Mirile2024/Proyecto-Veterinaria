import styles from './CaninoInfo.module.css'

export default function CaninoInfo({ estado }) {
    return (
        <div className={styles['Caninos-card']} >
            <h2>{estado.nombre}</h2>
            <img className={styles.imagen} src={estado.imagen} alt={estado.titulo} />
            <hr />
            <li>
                <p><strong>Edad:</strong> {estado.edad}</p>
                <p><strong>Sexo:</strong> {estado.sexo}</p>
                <p><strong>Raza:</strong> {estado.raza}</p>
                <p><strong>Tamaño:</strong> {estado.tamaño}</p>
            </li>
        </div>
    )
}
