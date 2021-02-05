import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001/";

export default function Chat(props) {
  const [connection, setConnection] = useState({});
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const conn = socketIOClient(ENDPOINT);
    setConnection(conn);
    conn.emit("user", { username: props.username });

    conn.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      conn.emit("disconnect");

      conn.off();
    };
  }, [props.username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    connection.emit("message", {
      username: props.username,
      message: event.target.message.value,
    });
    event.target.message.value = "";
  };

  return (
    <div className="Chat">
      <div className="chat_header">
        bookMates Messenger{" "}
        <span role="img" aria-label="emoji">
          &#128512;
        </span>
      </div>
      {messages.map((msg) => (
        <div>
          <b>{msg.username}</b>: {msg.message}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className="input_chat"
          placeholder="Type here to start chatting!"
        />
        <button className="chat_submit">Submit</button>
      </form>
    </div>
  );
}
