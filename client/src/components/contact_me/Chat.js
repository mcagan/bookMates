import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001/test";

export default function Chat(props) {
  useEffect(() => {
    console.log("Load once!!");
    const conn = socketIOClient(ENDPOINT);
    conn.on("intial", (data) => {
      console.log("ON INITIAL");
      conn.emit("storeClientInfo", { customId: props.username });
    });
  });
  return <div></div>;
}
