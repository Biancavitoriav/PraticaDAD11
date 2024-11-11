import styles from "./ListaEstoque.module.css";
import ItemEstoque from "../ItemEstoque/ItemEstoque.jsx"
function ListaEstoque({ tasks }) {
    return (
        <ul className={styles.list}>
            {}
            {tasks.map((task) => (
                <ItemEstoque
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}

export default ListaEstoque;
