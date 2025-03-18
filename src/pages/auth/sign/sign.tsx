
import Input from "../../../components/ui/input/input";
import styles from "./sign.module.css";

export default function Sign() {
  
  function handleSubmit() {
    console.log("Botão clicado! Cadastro enviado.");
    // Aqui você pode adicionar lógica para envio dos dados
  }

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <div className={styles.forms}>
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="11 912345678" pattern="[0-9]{10,11}" maxLength={11} />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm your password" />
        <button onClick={handleSubmit} id="enviado" className={styles.Button}>
          Sign Up
        </button>
      </div>
      <div className={styles.GA}>
        
      </div>
    </div>
  );
}
