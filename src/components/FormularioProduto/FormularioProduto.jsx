import { useState } from "react";
import styles from "./FormularioProduto.module.css";

function FormularioProduto({ addProduct }) {
    const [inputValue, setInputValue] = useState();
    const [inputText, setInputText] = useState();
    const [inputStorage, setInputStorage] = useState();
    const [inputPurchaseValue, setInputPurchaseValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
            addProduct(inputText,inputStorage,inputValue,inputPurchaseValue);
            setInputValue("");
            setInputText("")
            setInputStorage("")
            setInputPurchaseValue("")
        
    };

    return (
        <div className={styles.formulario}>
            <h1>Gerenciador de Estoque</h1>
            <p className={styles.label}> Caixa: R$</p>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.label}>Nome do produto</h1>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className={styles.input}
                />
                <h1 className={styles.label}>Quantidade em estoque</h1>
                <input
                    type="storage"
                    value={inputStorage}
                    onChange={(e) => setInputStorage(e.target.value)}
                    className={styles.input}
                />
                <h1 className={styles.label}>Valor da compra</h1>
                <input
                    type="value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={styles.input}
                />
                <h1 className={styles.label}>Valor de venda</h1>
                <input
                    type="purchaseValue"
                    value={inputPurchaseValue}
                    onChange={(e) => setInputPurchaseValue(e.target.value)}
                    className={styles.input}
                />
                <input
                    className={styles.botao}
                    type="submit"
                    value="Adicionar"
                />
            </form>
        </div>
    );
}

export default FormularioProduto;
