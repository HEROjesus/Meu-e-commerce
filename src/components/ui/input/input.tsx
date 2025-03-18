import styles from "./input.module.css";

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.container}>
     <input {...props} className={styles.input}/>
    </div>
  );
}
