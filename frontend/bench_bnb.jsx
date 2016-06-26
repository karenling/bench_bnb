var React = require('react');
var ReactDOM = require('react-dom');
var BenchIndex = require('./components/bench_index');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<BenchIndex></BenchIndex>, document.getElementById('content'));
})
