/*jshint esversion: 6*/

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchStore = new Store(AppDispatcher);
let _benches = {}

BenchStore.all = function() {
  return Object.assign({}, _benches);
};

function resetAllBenches(benches) {
  _benches = benches;
}

module.exports = BenchStore;
