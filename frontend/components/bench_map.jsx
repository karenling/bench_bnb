var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench_store');
var BenchActions = require('../actions/bench_actions')

var _parseBounds = function(bound) {
  return { lat: bound.lat(), lng: bound.lng() }
}
var BenchMap = React.createClass({
  getInitialState: function() {
    return({
      benches: BenchStore.all()
    })
  },
  _onChange: function() {
    this.setState({
      benches: BenchStore.all()
    })
    Object.keys(this.state.benches).map(function(benchId) {
      var bench = this.state.benches[benchId];
      this.addNewMarker(bench.lat, bench.lng);
    }.bind(this))
  },
  componentDidMount: function() {
    BenchStore.addListener(this._onChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', function() {
      var bounds = this.getBounds();
      var northEast = _parseBounds(bounds.getNorthEast());
      var southWest = _parseBounds(bounds.getSouthWest());
      var parsedBounds = { northEast: northEast, southWest: southWest}
      BenchActions.fetchAllBenches(parsedBounds);
    })
  },
  addNewMarker: function(lat, lng) {
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: this.map,
      title: 'Hello World!'
    });
  },
  render: function() {
    return(
      <div className='map' ref='map'></div>
    )
  }
});

module.exports = BenchMap;
