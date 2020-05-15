import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001/test";

export default function Chat() {
  useEffect(() => {
    console.log("Load once!!");
    const conn = socketIOClient(ENDPOINT);
    conn.on("intial", (data) => {
      console.log("ON INITIAL");
      console.log(data);
    });
  });
  return <div></div>;
}
