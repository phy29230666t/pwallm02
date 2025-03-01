import React, { useState, useEffect } from "react";
import { getAllMessages, saveMessage } from "./indexedDB";

const Chat: React.FC<{ engine: any }> = ({ engine }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    getAllMessages().then(setMessages);
  }, []);

  const handleSend = async () => {
    if (!input || !engine) return;

    const userMessage = { role: "user", content: input };
    const botResponse = await engine.chat(input);

    const botMessage = { role: "bot", content: botResponse };

    const updatedMessages = [...messages, userMessage, botMessage];
    setMessages(updatedMessages);

    saveMessage(userMessage);
    saveMessage(botMessage);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <b>{msg.role === "user" ? "사용자" : "AI"}:</b> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="메시지를 입력하세요..."
      />
      <button onClick={handleSend}>전송</button>
    </div>
  );
};

export default Chat;
