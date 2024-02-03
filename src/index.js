import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let postsData = [
  { id: 1, message: "Hi, how are you?", LikesCount: 12 },
  { id: 2, message: "Hello!!!", LikesCount: 11 },
  { id: 3, message: " Where are you", LikesCount: 16 },
  { id: 3, message: " haha", LikesCount: 3 },
];

let dialogsData = [

  { id: 1, name: "Nikita" },
  { id: 2, name: "Nikolay" },
  { id: 3, name: "Maria" },
  { id: 4, name: "Maksim" },
  { id: 5, name: "Galina" },
  { id: 6, name: "Roman" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
];


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
