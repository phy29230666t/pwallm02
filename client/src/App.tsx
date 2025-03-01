import React, { useState, useEffect } from "react";
import { initMLCEngine } from "./mlcEngine";
import Chat from "./Chat";

const App: React.FC = () => {
  const [engine, setEngine] = useState<any>(null);
  const [isOffline, setIsOffline] = useState<boolean>(false);

  // MLC 엔진 초기화
  useEffect(() => {
    initMLCEngine().then(setEngine);
    window.addEventListener("offline", () => setIsOffline(true));
    window.addEventListener("online", () => setIsOffline(false));
  }, []);

  return (
    <div>
      <h1>PWA LLM Chatbot</h1>
      <p>{isOffline ? "오프라인 모드" : "온라인 모드"}</p>
      <Chat engine={engine} />
    </div>
  );
};

export default App;
