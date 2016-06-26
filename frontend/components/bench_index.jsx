var React = require('react');
var BenchStore = require('../stores/bench_store');
var BenchActions = require('../actions/bench_actions');
var BenchIndexItem = require('./bench_index_item');

var BenchIndex = React.createClass({
  getInitialState: function() {
    return({
      benches: BenchStore.all()
    });
  },
  _handleChange: function() {
    this.setState({
      benches: BenchStore.all()
    });
  },
  componentDidMount: function() {
    BenchStore.addListener(this._handleChange);
    BenchActions.fetchAllBenches();
  },
  render: function() {
    return(
      <div>
        { Object.keys(this.state.benches).map(function(benchId) {
          return <BenchIndexItem key={ benchId } bench={ this.state.benches[benchId] }></BenchIndexItem>
        }.bind(this))}
      </div>
    )


  }
});

module.exports = BenchIndex;
