import { useRef } from "react";
import styles from "./Doctor.module.css";
import Avatar from "../Avatar/Avatar";
import AvatarImg from "../../assets/images/doctor.png";
import MessageField from "../MessageField/MessageField";

type Props = {
  doctorMessage: string;
};

const Doctor = (props: Props) => {
  const messageRef = useRef(
    props.doctorMessage ||
      "Добро пожаловать на консультацию! Я - AI. Doctor, система искусственного интеллекта, которая может дать рекомендации на основе ваших показаний о самочувствии. Для того, чтобы я мог помочь вам, пожалуйста, опишите ваши симптомы или проблему."
  );
  return (
    <div className={styles.doctor}>
      <Avatar image={AvatarImg} name="Доктор" />
      <MessageField message={messageRef.current} />
    </div>
  );
};

export default Doctor;
