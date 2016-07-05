var React = require('react');
var BenchIndex = require('./bench_index');
var BenchMap = require('./bench_map');
var BenchStore = require('../stores/bench_store');

var Search = React.createClass({
  getInitialState: function() {
    return({
      benches: BenchStore.all()
    })
  },
  _onChange: function() {
    this.setState({ benches: BenchStore.all() })
  },
  componentDidMount: function() {
    this.listener = BenchStore.addListener(this._onChange);
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  render: function() {
    return(
      <div>
        <BenchIndex benches={this.state.benches}></BenchIndex>
        <BenchMap benches={this.state.benches}></BenchMap>
      </div>
    )
  }
})

module.exports = Search;
