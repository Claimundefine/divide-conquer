import React, { FC, useState } from "react";

interface Message {
  user: string;
  text: string;
}

const Chatbox: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    setMessages((prevMessages) => [...prevMessages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} >
            <b>{message.user}:</b> {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "80%" }}
        />
        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;