import { useEffect } from "react";
import "./styles.css";
import useToast from "./toast/useToast";
import ProgressBar from "./progress-bar/ProgressBar";

export default function App() {
  const { toastHandler, ToastComponent } = useToast();

  const notificationHandler = (type) => {
    toastHandler({ type, message: type, duration: 5000 });
  };

  const toast = (
    <div>
      <button onClick={() => notificationHandler("success")}>Success</button>
      <button onClick={() => notificationHandler("error")}>Error</button>
      <button onClick={() => notificationHandler("info")}>Info</button>
      <button onClick={() => notificationHandler("warning")}>Warning</button>
      {ToastComponent}
    </div>
  );

  useEffect;

  return (
    <div className="App">
      <ProgressBar />
    </div>
  );
}
