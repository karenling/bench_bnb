var React = require('react');
var BenchIndex = require('./bench_index');
var BenchMap = require('./bench_map');

var Search = React.createClass({
  render: function() {
    return(
      <div>
        <BenchIndex></BenchIndex>
        <BenchMap></BenchMap>
      </div>
    )
  }
})

module.exports = Search;
