/*jshint esversion: 6*/

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const MarkerStore = new Store(AppDispatcher);
let _markers = {};

MarkerStore.all = function() {
  return _markers;
};

MarkerStore.__onDispatch = function(payload) {

};

MarkerStore.addMarker = function(marker) {
  _markers[marker.benchId] = marker;
};

MarkerStore.removeMarker = function(marker) {
  _markers[marker.benchId].setMap(null);
  delete _markers[marker.benchId]
};

MarkerStore.highlightMarker = function(benchId) {
  _markers[benchId].setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
};

MarkerStore.resetHighlight = function(benchId) {
  _markers[benchId].setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
};

module.exports = MarkerStore;
