/*jshint esversion: 6*/

const BenchApiUtil = {
  fetchAllBenches: function(bounds, success) {
    $.ajax({
      type: 'GET',
      url: '/api/benches',
      dataType: 'JSON',
      data: { bounds: bounds },
      success: function(benches) {
        success(benches);
      }
    });
  },
  createBench: function(data, success) {
    $.ajax({
      type: 'POST',
      url: '/api/benches',
      dataType: 'JSON',
      data: { bench: data },
      success: function(bench) {
        success(bench);
      }
    });
  }
};

module.exports = BenchApiUtil;
