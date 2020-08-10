import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import CreateMenu from "./create-menu";

class App extends React.Component {
  render() {
    return <CreateMenu initialData={initialData}></CreateMenu>;
  }
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
