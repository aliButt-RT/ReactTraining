import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sample from "./first";
import randerList from "./Folder1/randerList";
import reportWebVitals from "./reportWebVitals";
import ShoppingList from "./Folder1/randerList";
import ProductFilter from "./Folder1/ProductFilter";
import ProductFilter2 from "./Folder1/ProductFilter2";
import Gallery from "./Folder1/showPic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
