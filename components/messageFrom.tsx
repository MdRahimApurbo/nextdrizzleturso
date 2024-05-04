"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addMessage } from "@/action/add-message";

const messageFrom = () => {
  const [message, setmessage] = useState("");

  async function handlesubmit() {
    const response = await addMessage(message);
    if (response) {
      setmessage("");
    } else {
      setmessage("");
    }
  }

  return (
    <div>
      <Input
        value={message}
        onChange={(e) => setmessage(e.target.value)}
        placeholder="Type something"
      />
      <Button onClick={handlesubmit}>Button</Button>
    </div>
  );
};

export default messageFrom;
