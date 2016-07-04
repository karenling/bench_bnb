/*jshint esversion: 6*/

const BenchApiUtil = require('../util/bench_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchActions = {
  fetchAllBenches: function(bounds) {
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },
  receiveAllBenches: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  createBench: function(data) {
    BenchApiUtil.createBench(data, this.receiveBench);
  },
  receiveBench: function(bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  }
};

module.exports = BenchActions;
