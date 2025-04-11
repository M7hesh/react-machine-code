import "./styles.css";
import Toast from "./toast/Toast";

export default function App() {
  return (
    <div className="App">
      <Toast message="hi" type="success" />
    </div>
  );
}
