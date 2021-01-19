import React from 'react';
import ReactDOM from 'react-dom';
import App from "./funComponents/index"


if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
