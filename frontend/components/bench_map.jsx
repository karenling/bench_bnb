var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench_store');
var BenchActions = require('../actions/bench_actions')
var MarkerStore = require('../stores/marker_store');

var _parseBounds = function(bound) {
  return { lat: bound.lat(), lng: bound.lng() }
}
var BenchMap = React.createClass({
  getInitialState: function() {
    return({
      benches: BenchStore.all(),
      markers: MarkerStore.all()
    })
  },
  _onChange: function() {
    this.setState({
      benches: BenchStore.all(),
      markers: MarkerStore.all()
    })
    Object.keys(this.state.benches).map(function(benchId) {
      var bench = this.state.benches[benchId];
      this.addNewMarker(bench);
    }.bind(this))
    this.markersToRemove();
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
  addNewMarker: function(bench) {
    var marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      benchId: bench.id
    });
    MarkerStore.addMarker(marker);
  },
  markersToRemove: function() {
    this.state.markers.filter(function(marker) {
      if (Object.keys(this.state.benches).indexOf(marker.benchId.toString()) === -1) {
        this.removeMarker(marker);
      }
    }.bind(this));
  },
  removeMarker: function(marker) {
    var idx = this.state.markers.indexOf(marker);
    MarkerStore.removeMarker(idx);
  },
  render: function() {
    return(
      <div className='map' ref='map'></div>
    )
  }
});

module.exports = BenchMap;
