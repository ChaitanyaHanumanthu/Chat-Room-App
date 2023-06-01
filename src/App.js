// Importing all the module and components
import { ChatEngine } from "react-chat-engine";
import AllMessages from "./components/AllMessages";
import LoginForm from "./components/LoginForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// App component
const App = () => {
  // Checking weather the user is logged in or not
  if (!localStorage.getItem("username")) return <LoginForm />;

  // returning the comp
  return (
    <ChatEngine
      height="100vh"
      // Project id from the chat engine
      projectID="62f540e5-404f-46a2-8a6f-22798a6caf6e"
      // User detailss
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      // All messages component
      renderChatFeed={(chatAppProps) => <AllMessages {...chatAppProps} />}
    />
  );
};

export default App;
