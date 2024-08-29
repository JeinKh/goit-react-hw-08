import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
