var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Search></Search>, document.getElementById('content'));
})
