import RobotProfileImg from '../assets/robot.png';
import UserProfileImg from '../assets/user.png';
import './ChatMessage.css';

function ChatMessage({ message, sender }) {

      /* if (sender === 'chatbot') {
        return (
          <div>
            <img src={RobotProfileImg} alt="Robot" width="50"/>
            {message}
          </div>
        );
      } */
      return (
        <div className={
          sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-chatbot'}>
          {sender === 'chatbot' && (
            <img src={RobotProfileImg} alt="Robot" className="chat-message-profile" />
          )}
          <div className="chat-message-text">
            {message}
          </div>
          {sender === 'user' && (
            <img src={UserProfileImg} alt="User" className="chat-message-profile" />
          )}
        </div>
      );
    }

export default ChatMessage;