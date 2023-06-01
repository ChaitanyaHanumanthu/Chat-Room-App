// Importing all the required components
import OwnMessage from "./OwnMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";
import { LogoutOutlined } from "@ant-design/icons";

const AllMessages = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  // function to re render the read receipts
  const renderReadReceipts = (message, isMyOwnMessage) =>
    // Mapping the people
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyOwnMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  // function to logout
  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  // Function to render the messages
  const renderMessages = () => {
    const keys = Object.keys(messages);

    // Mapping the messages
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      const isMyOwnMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="d-inline-block" style={{ width: "100%" }}>
            {isMyOwnMessage ? (
              <OwnMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessage]}
              />
            )}
          </div>
          <div
            className="position-relative"
            style={{
              marginRight: isMyOwnMessage ? "18px" : "0px",
              marginLeft: isMyOwnMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyOwnMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="all-messages">
      <div
        className="text-center mb-1 p-2 border-bottom opacity-75 d-flex"
        style={{ width: "100%", padding: "10px" }}
      >
        {/* Title, people in the chat */}
        <div className="m-auto">
          <div className="chat-title text-capitalize">{chat?.title}</div>

          {/* Getting the username from the local storage */}
          <div className="text-info">
            {`${localStorage.getItem("username")}'s Profile`}
          </div>

          {/* Getting the number of people are in the group */}
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username},`)}
          </div>
        </div>

        {/* Button to logout */}
        <div className="my-auto">
          <button
            className="text-center p-2 m-auto me-3 text-bg-danger border-0 rounded btn btn-sm"
            style={{ transform: "rotate(-90deg)" }}
            onClick={handleLogout}
          >
            {/* Logout icon */}
            <LogoutOutlined />
          </button>
        </div>
      </div>

      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default AllMessages;
