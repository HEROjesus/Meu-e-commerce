import styles from "./App.module.css";
import { Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";

export default function App() {
  return (
    <div className={styles.container}>
      <p className={styles.cadastro}>
        Sign up and get 20% off your first order.
        <Link to="/sign">
          <strong> Sign Up Now</strong>
        </Link>
      </p>
      <X className={styles.close} size={32} color="white" />
    </div>
  );
}
