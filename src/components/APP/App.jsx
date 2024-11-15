import './App.module.css';
import { useState } from 'react';
import FormularioProduto from "../FormularioProduto/FormularioProduto.jsx";
import ListaEstoque from "../ListaEstoque/ListaEstoque.jsx";
import styles from "./App.module.css";


function App() {
    const [tasks, setTasks] = useState([]);

    const addProduct = (text, storage, value, purchaseValue) => {
        const newTask = {
          id: Date.now(),
          text,
          storage,
          value,
          purchaseValue
        };
        setTasks([...tasks, newTask]);
      };   

  return (
    <div className={styles.aplicativo}>
        <FormularioProduto addProduct={addProduct}></FormularioProduto>
        <ListaEstoque tasks={tasks}
      />
    </div>
  );
}

export default App;
