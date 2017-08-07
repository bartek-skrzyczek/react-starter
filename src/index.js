import React from 'react';
import ReactDom from 'react-dom';

// this component will produce some HTML output

const App = () => {
  return <div>Hello World!</div>;
}

//display this component

ReactDom.render(<App />, document.querySelector('.container'));
