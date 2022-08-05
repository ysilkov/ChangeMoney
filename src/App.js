import "./App.css";
import React from "react";
import Api from "./components/Api"

const App = () => {
  return (
    <div className="App">
      {this.state.isLoading ? (
          <Loading />
        ) : (
          <ApiContainer state={this.state} />
        )}
    </div>
  );
};
export default App;
