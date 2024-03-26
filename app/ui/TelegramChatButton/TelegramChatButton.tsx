import React from 'react';
import { secretsData } from './../../data/secrets';

interface TelegramChatButtonProps {
  buttonText: string;
  className?: string;
  message: string;
  outerHandler: () => void;
  disabled?: boolean;
}

const BASE_URL = `https://api.telegram.org/bot${secretsData.BOT_TOKEN}`;

const TelegramChatButton: React.FC<TelegramChatButtonProps> = ({buttonText, className, message, outerHandler, disabled}) => {

  const sendToTelegramChat = async () => {
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${secretsData.CHAT_ID}&text=${encodeURIComponent(message)}`;
    
    if (message) {
      try {
        await fetch(POST_REQUEST_URL);
        outerHandler();
      } catch (error) {
        console.error('Произошла ошибка при отправке сообщения:', error);
      }
    }
  };
  
  return (
    <button onClick={sendToTelegramChat} className={className} disabled={disabled} type="button">
      {buttonText}
    </button>
  );
};

export default TelegramChatButton;
