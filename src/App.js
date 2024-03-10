import './App.css';
import UserInput from './components/ChatInput.jsx';
import ChatBox from './components/ChatBox.jsx';
import ChatArea from './components/ChatArea.jsx';
import ChatInput from './components/ChatInput.jsx';

function App() {
  return (
    <div classname="chatbot">
      <ChatBox />
      <ChatInput />
      {/* <UserInput /> */}
      {/* <ChatArea /> */}
    </div>
  );
}

export default App;
