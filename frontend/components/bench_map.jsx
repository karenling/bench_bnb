var React = require('react');
var ReactDOM = require('react-dom');
var BenchActions = require('../actions/bench_actions')
var MarkerStore = require('../stores/marker_store');
var hashHistory = require('react-router').hashHistory;

var _parseBounds = function(bound) {
  return { lat: bound.lat(), lng: bound.lng() }
}
var BenchMap = React.createClass({
  getInitialState: function() {
    return({
      markers: MarkerStore.all()
    })
  },
  _onChange: function() {
    Object.keys(this.props.benches).map(function(benchId) {
      var bench = this.props.benches[benchId];
      this.addNewMarker(bench);
    }.bind(this))
    this.markersToRemove();
  },
  _handleMapClick: function(coords) {
    var formattedCoords = {lat: coords.lat(), lng: coords.lng()}
    hashHistory.push({
      pathname: 'benches/new',
      query: formattedCoords
    });
  },
  componentDidUpdate: function() {
    this._onChange();
  },
  componentDidMount: function() {
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.mapIdleListener = this.map.addListener('idle', function() {
      var bounds = this.getBounds();
      var northEast = _parseBounds(bounds.getNorthEast());
      var southWest = _parseBounds(bounds.getSouthWest());
      var parsedBounds = { northEast: northEast, southWest: southWest}
      BenchActions.fetchAllBenches(parsedBounds);
    })
    this.mapClickListener = this.map.addListener('click', function(e) {
      this._handleMapClick(e.latLng);
    }.bind(this))
    this._onChange();
  },
  componentWillUnmount: function() {
    google.maps.event.removeListener(this.mapIdleListener);
    google.maps.event.removeListener(this.mapClickListener);
  },
  addNewMarker: function(bench) {
    var marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      benchId: bench.id,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
    MarkerStore.addMarker(marker);
  },
  markersToRemove: function() {
    Object.keys(this.state.markers).filter(function(id){
      if (Object.keys(this.props.benches).indexOf(id) === -1) {
        this.removeMarker(this.state.markers[id]);
      }
    }.bind(this))
  },
  removeMarker: function(marker) {
    MarkerStore.removeMarker(marker);
  },
  render: function() {
    return(
      <div className='map' ref='map'></div>
    )
  }
});

module.exports = BenchMap;
