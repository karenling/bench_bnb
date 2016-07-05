var React = require('react');
var BenchStore = require('../stores/bench_store');
var BenchActions = require('../actions/bench_actions');
var BenchIndexItem = require('./bench_index_item');

var BenchIndex = React.createClass({
  render: function() {
    return(
      <div>
        { Object.keys(this.props.benches).map(function(benchId) {
          return <BenchIndexItem
            key={ benchId }
            bench={this.props.benches[benchId]} />
        }.bind(this))}
      </div>
    )
  }
});

module.exports = BenchIndex;
