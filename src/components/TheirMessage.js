// Their messages component
//

const TheirMessage = ({ lastMessage, message }) => {
  // Checking weather the first message by the sender or not
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  // Returning the component
  return (
    <div className="d-flex float-start ps-2" style={{ width: "100%" }}>
      {/* If the first messsage is by the sender then  display his avatar and the messages*/}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}

      {/* Displaying the Image files */}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        // Displaying the sender message in left side of the screen
        <div
          className="rounded float-start p-2"
          style={{
            backgroundColor: "#b6bccc",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            textTransform: "capitalize",
          }}
        >
          {/* Here is the messages */}
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
