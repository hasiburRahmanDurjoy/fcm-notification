import React, { useState, useEffect } from "react";
import { getToken } from "../../firebaseInit.js";

const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);
  const [token, setToken] = useState("");

  console.log("Token found", isTokenFound);

  // To load once
  useEffect(() => {
    tokenFunc();
  }, []);

  const tokenFunc = async () => {
    const data = await getToken(setTokenFound);
    if (data) {
      console.log("Token is", data);
      setToken(data);
    }
    return data;
  }

  return (
    <div>
      <p>Token is : {token ? token : 'not found'}</p>
    </div>
  )
};

Notifications.propTypes = {};

export default Notifications;
