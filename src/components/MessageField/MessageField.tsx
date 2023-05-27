import styles from "./MessageField.module.css";

type Props = {
  message: string;
};

const MessageField = (props: Props) => {
  return <div className={styles.message}>{props.message}</div>;
};

export default MessageField;
