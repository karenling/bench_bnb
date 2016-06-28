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
    this.markers = []
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
    this.markers.push(marker);
  },
  markersToRemove: function() {
    this.markers.filter(function(marker) {
      if (Object.keys(this.state.benches).indexOf(marker.benchId.toString()) === -1) {
        this.removeMarker(marker);
      }
    }.bind(this));
  },
  removeMarker: function(marker) {
    var idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1)
  },
  render: function() {
    return(
      <div className='map' ref='map'></div>
    )
  }
});

module.exports = BenchMap;
