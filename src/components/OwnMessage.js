// Own messages component
const OwnMessage = ({ message }) => {
  // Displaying the images in the right side
  if (message.attachments && message.attachments.length > 0) {
    // Returns if there are images
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  // Returns the messages
  return (
    <div className="ownMessage rounded float-end p-2 mb-1 me-3 text-white ">
      {message.text} {/*messages */}
    </div>
  );
};

export default OwnMessage;
