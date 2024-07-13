const heading = React.createElement("div", {id:"heading" }, "Hello world");
// const heading1 = React.createElement("h2",{id:"heading2"},"hello 2");
const t = React.createElement("div",{id:"t"},[heading]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(t);


