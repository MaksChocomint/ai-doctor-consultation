import { useState, useEffect } from "react";
import styles from "./Dialog.module.css";
import AskField from "../AskField/AskField";
import Doctor from "../Doctor/Doctor";
import User from "../User/User";
import { OpenAI } from "langchain/llms/openai";
import Loader from "../Loader/Loader";

const Dialog = () => {
  const [userMessage, setUserMessage] = useState("");
  const [doctorMessage, setDoctorMessage] = useState("");
  const [res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [doctorMessages, setDoctorMessages] = useState<string[]>([]);

  const addUserMessage = () => {
    const newUserMessage = userMessage !== "" && userMessage;

    if (newUserMessage) {
      setUserMessages((prevUserMessages) => [
        ...prevUserMessages,
        newUserMessage,
      ]);
    }
  };
  const addDoctorMessage = () => {
    const newDoctorMessage = doctorMessage !== "" && doctorMessage;
    if (newDoctorMessage) {
      setDoctorMessages((prevDoctorMessages) => [
        ...prevDoctorMessages,
        newDoctorMessage,
      ]);
    }
  };

  const openAPIKey = import.meta.env.VITE_OPEN_API_KEY;

  const model = new OpenAI({
    openAIApiKey: openAPIKey,
    temperature: 1,
    maxTokens: 4000,
  });

  const getRes = async (message: string) => {
    setIsLoading(true);
    const response = await model.call(message);
    setRes(response);
    setIsLoading(false);
  };

  useEffect(() => {
    if (userMessage !== "") {
      getRes(changeUserMessage(userMessage));
      addUserMessage();
    }
  }, [userMessage]);

  useEffect(() => {
    if (res !== "") {
      setDoctorMessage(res);
    }
  }, [res]);

  useEffect(() => {
    addDoctorMessage();
  }, [doctorMessage]);

  const changeUserMessage = (userMessage: string): string => {
    if (
      userMessage.toLowerCase().search("что это") ||
      userMessage.toLowerCase().search("перечисли возможные болезни")
    ) {
      return userMessage;
    } else {
      return userMessage + " что это? Перечисли возможные болезни";
    }
  };

  const renderMessages = () => {
    const messages = [];
    const maxLength = Math.max(userMessages.length, doctorMessages.length);

    for (let i = 0; i < maxLength; i++) {
      if (userMessages[i]) {
        messages.push(<User key={`user-${i}`} userMessage={userMessages[i]} />);
      }
      if (doctorMessages[i]) {
        messages.push(
          <Doctor key={`doctor-${i}`} doctorMessage={doctorMessages[i]} />
        );
      }
    }

    return messages;
  };

  return (
    <div className={styles.dialog}>
      <Doctor doctorMessage={doctorMessage} />
      {renderMessages()}
      {isLoading && <Loader />}
      <AskField userMessage={userMessage} setUserMessage={setUserMessage} />
    </div>
  );
};

export default Dialog;
