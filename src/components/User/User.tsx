import { useRef } from "react";
import styles from "./User.module.css";
import Avatar from "../Avatar/Avatar";
import AvatarImg from "../../assets/images/patient.png";
import MessageField from "../MessageField/MessageField";

type Props = {
  userMessage: string;
};

const User = (props: Props) => {
  const messageRef = useRef(props.userMessage);
  return (
    <div className={styles.user}>
      <MessageField message={messageRef.current} />
      <Avatar image={AvatarImg} name="Вы" />
    </div>
  );
};

export default User;
