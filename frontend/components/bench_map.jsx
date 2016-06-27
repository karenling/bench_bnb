var React = require('react');
var ReactDOM = require('react-dom');

var BenchMap = React.createClass({
  componentDidMount: function() {
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },
  render: function() {
    return(
      <div className='map' ref='map'></div>
    )
  }
});

module.exports = BenchMap;
