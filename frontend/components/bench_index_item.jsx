var React = require('react');

var BenchIndexItem = React.createClass({
  render: function() {
    return(
      <div>
        <b>Description:</b> { this.props.bench.description }
        <b> Latitude:</b> { this.props.bench.lat }
        <b> Longitude:</b> { this.props.bench.lng }
      </div>
    )
  }
})

module.exports = BenchIndexItem;
