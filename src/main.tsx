import ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from "@app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
