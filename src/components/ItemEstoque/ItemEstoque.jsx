import { useState } from "react";
import styles from "./ItemEstoque.module.css";

function ItemEstoque({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <li className={styles.list} key={task.id}>
            {}
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className={styles.input}
                    />
                    <button
                        onClick={handleSave}
                        className={styles.saveButton}
                    >
                        Salvar
                    </button>
                </>
            ) : (
                <>
                    {}
                    <button
                        onClick={handleEdit}
                        className={styles.bt}
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => removeTask(task.id)}
                        className={styles.btRemover}
                    >
                        Remover
                    </button>
                </>
            )}
        </li>
    );
}

export default ItemEstoque;