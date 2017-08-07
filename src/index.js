import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBRQ-QrwS4aGou3I8JbklRAqFeQPcwYZz0';

// this component will produce some HTML output

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//display this component

ReactDom.render(<App />, document.querySelector('.container'));
