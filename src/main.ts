import "./app.css";
import App from "./App.svelte";

const newElement = document.createElement("div");
newElement.id = "treel-chat";
document.body.appendChild(newElement);

const app = new App({
  target: newElement,
});

export default app;
