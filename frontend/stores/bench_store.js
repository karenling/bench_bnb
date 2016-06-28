/*jshint esversion: 6*/

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchStore = new Store(AppDispatcher);
const BenchConstants = require('../constants/bench_constants');
let _benches = {}

BenchStore.all = function() {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetAllBenches(payload.benches);
      break;
  }
};

function resetAllBenches(benches) {
  _benches = {}
  benches.forEach(function(bench) {
    _benches[bench.id] = bench
  })
  BenchStore.__emitChange();
}

module.exports = BenchStore;
