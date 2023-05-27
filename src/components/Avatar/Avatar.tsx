import styles from "./Avatar.module.css";

type Props = {
  image: string;
  name: string;
};

const Avatar = (props: Props) => {
  return (
    <div className={styles.avatar}>
      <img src={props.image} alt="avatar" className={styles.avatar_image} />
      <p className={styles.avatar_name}>{props.name}</p>
    </div>
  );
};

export default Avatar;
