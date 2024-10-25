import CaninoInfo from "../CaninosCard/CaninoInfo";
import styles from "./Veterinaria.module.css"
export default function Veterinaria({items}) {
    return (
        <div className={styles['padre']}>
            <ul>
            {items.map((i) =>
                <CaninoInfo estado={i} key={i.id} />
            )}
            </ul>
        </div>
    )
}
