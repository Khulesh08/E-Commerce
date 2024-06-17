import React, { useState, useEffect } from "react";
import "./helper.css";

interface Props {
  message: string;
  duration?: number;
}

const ToastNotification: React.FC<Props> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return visible ? (
    <div className="toast-notification">
      <div className="toast-message">{message}</div>
    </div>
  ) : null;
};

export default ToastNotification;
