import React, { useEffect, useState } from "react";
import { FC } from "react";
import axios from "axios";

export const App: FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      await axios.get("/api").then((response) => {
        setMessage(response.data);
      });
    })();
  }, []);

  return (
    <div>
      <div>aaaaaaa</div>
      <div>{message}</div>
    </div>
  );
};
