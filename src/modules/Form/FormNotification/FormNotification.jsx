import styles from "./FormNotification.module.css";

const FormNotification = ({ children, type }) => {
  return (
    <div
      className={`${styles["form__notification"]} ${styles[`form__notification--${type}`]}`}
    >
      {children}
    </div>
  );
};

export default FormNotification;
