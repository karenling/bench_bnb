/*jshint esversion: 6*/

const BenchApiUtil = {
  fetchAllBenches: function() {
    $.ajax({
      type: 'GET',
      url: '/api/benches',
      dataType: 'JSON',
      success: function(response) {
        console.log(response);
      }
    });
  }
};

module.exports = BenchApiUtil;
