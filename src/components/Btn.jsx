import styles from './CaninoInfo.module.css'

export default function btn({estado}) {
  return (
    <div className={styles['Caninos-card']} >
        <img className={styles.imagen} src={estado.imagen} alt={estado.titulo} />
    </div>
  )
}
