var React = require('react');
var MarkerStore = require('../stores/marker_store');

var BenchIndexItem = React.createClass({
  handleMouseover: function(e) {
    MarkerStore.highlightMarker(this.props.bench.id);
  },
  handleMouseOut: function(e) {
    MarkerStore.resetHighlight(this.props.bench.id);
  },
  render: function() {
    return(
      <div onMouseOver={this.handleMouseover} onMouseOut={this.handleMouseOut}>
        <b>Description:</b> {this.props.bench.description}
        <b> Latitude:</b> {this.props.bench.lat}
        <b> Longitude:</b> {this.props.bench.lng}
      </div>
    )
  }
})

module.exports = BenchIndexItem;
