import "./styles.css";
import useToast from "./toast/useToast";

export default function App() {
  const { toastHandler, ToastComponent } = useToast()

  const notificationHandler = (type) => {
    toastHandler({ type, message: type, duration: 5000 })
  }
  return (
    <div className="App">
      <button onClick={() => notificationHandler('success')}>Success</button>
      <button onClick={() => notificationHandler('error')}>Error</button>
      <button onClick={() => notificationHandler('info')}>Info</button>
      <button onClick={() => notificationHandler('warning')}>Warning</button>
      {ToastComponent}
    </div>
  );
}
