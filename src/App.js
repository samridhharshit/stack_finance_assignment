import React from 'react';
import './App.css';
import Original from "./Components/Original";
import Clone from "./Components/Clone";

function App() {
  return (
    <div className="App">
        <div className="row App-row">
            <div className="col-md-6 col-sm-12 original">
                <Original />
            </div>
            <div className="col-md-6 col-sm-12 clone">
                <Clone />
            </div>
        </div>
    </div>
  );
}

export default App;
