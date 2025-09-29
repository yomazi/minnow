import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

import styles from "../css/components/Main.module.css";

interface MainProps {
  isOpen: boolean;
  onClose: () => void;
}

const Main: React.FC<MainProps> = ({ isOpen }) => {
  const [message, setMessage] = useState("");
  const [htmlContent, setHtmlContent] = useState("<p>Hello, world!</p>");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch("/api/hello");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        setMessage(data.message);
      } catch (err) {
        console.error(err);
        setMessage("Failed to load message.");
      }
    };

    fetchMessage();
  });

  const onHtmlChange = (html: string) => {
    setHtmlContent(html);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onHtmlChange={onHtmlChange} />
      <main className={styles.main}>
        <h1>Vite + React</h1>
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h1>API Test</h1>
          <p>{message || "Loading..."}</p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <h2>Preview</h2>
        <div
          style={{ border: "1px solid #ccc", padding: "10px" }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </>
  );
};

export default Main;
