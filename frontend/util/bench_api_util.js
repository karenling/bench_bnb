/*jshint esversion: 6*/

const BenchApiUtil = {
  fetchAllBenches: function(success) {
    $.ajax({
      type: 'GET',
      url: '/api/benches',
      dataType: 'JSON',
      success: function(benches) {
        success(benches);
      }
    });
  }
};

module.exports = BenchApiUtil;
