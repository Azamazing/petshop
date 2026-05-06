import styles from "./ErrorNotification.module.css";

const ErrorNotification = ({ text = "Error" }) => {
  return <div className={styles["error-notification"]}>{text}</div>;
};

export default ErrorNotification;
