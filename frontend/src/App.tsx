import React, { useEffect, useState } from "react";
import { FC } from "react";

export const App: FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <div>aaaaaaa</div>
      <div>{message}</div>
    </div>
  );
};
