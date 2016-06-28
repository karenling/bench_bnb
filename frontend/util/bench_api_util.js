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
  }
};

module.exports = BenchApiUtil;
