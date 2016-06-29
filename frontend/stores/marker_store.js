/*jshint esversion: 6*/

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const MarkerStore = new Store(AppDispatcher);
let _markers = [];

MarkerStore.all = function() {
  return _markers;
};

MarkerStore.__onDispatch = function(payload) {

};

MarkerStore.addMarker = function(marker) {
  _markers.push(marker);
};

MarkerStore.removeMarker = function(idx) {
  _markers[idx].setMap(null);
  _markers.splice(idx, 1);
};

MarkerStore.highlightMarker = function(benchId) {
  _markers.forEach(function(marker) {
    if (marker.benchId === benchId) {
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }
  });
};

MarkerStore.resetHighlight = function(benchId) {
  _markers.forEach(function(marker) {
    if (marker.benchId === benchId) {
      marker.setIcon();
    }
  });
};

module.exports = MarkerStore;
