import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001/";

export default function Chat(props) {
  const [connection, setConnection] = useState({});
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("Load once!!");
    const conn = socketIOClient(ENDPOINT);
    setConnection(conn);
    console.log(props.username);
    console.log("sending message");
    console.log(conn);
    conn.emit("user", { username: props.username });

    conn.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
      console.log(messages);
      console.log("MESSAGE HAS COME");
      console.log(data);
    });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(connection);
    console.log(evt.target.message.value);
    connection.emit("message", {
      username: props.username,
      message: evt.target.message.value,
    });
  };
  return (
    <div className="Chat">
      {messages.map((msg) => (
        <div>
          <b>{msg.username}</b>: {msg.message}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button>Submit</button>
      </form>
    </div>
  );
}