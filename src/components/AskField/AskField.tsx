import React, { useRef } from "react";
import styles from "./AskField.module.css";
import { BsSendFill } from "react-icons/bs";

type Props = {
  userMessage: string;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
};

const AskField = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputRef.current !== null) {
        props.setUserMessage(inputRef.current.value);
        inputRef.current.value = "";
      }
    }
  };

  const handleClick = () => {
    if (inputRef.current !== null) {
      props.setUserMessage(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className={styles.ask}>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        type="text"
        className={styles.ask_input}
      />
      <div
        className={styles.ask_send}
        onClick={() => {
          handleClick();
        }}
      >
        <BsSendFill size="20" />
      </div>
    </div>
  );
};

export default AskField;
