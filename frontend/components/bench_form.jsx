var React = require('react');
var BenchActions = require('../actions/bench_actions');

var BenchForm = React.createClass({
  getInitialState: function() {
    return({
      description: '',
      seating: 2,
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    BenchActions.createBench(this.state);
  },
  handleChange: function(e) {
    var changed = {}
    changed[e.target.name] = e.target.value
    this.setState(changed)
  },
  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Description
          <input type='text'
            name='description'
            onChange={this.handleChange}
            value={this.state.description} />
        </label>
        <label>Seating
          <input
            type='number'
            name='seating'
            onChange={this.handleChange}
            value={this.state.seating} />
        </label>
        <label>Latitude
          <input
            disabled
            type='text'
            name='lat'
            onChange={this.handleChange}
            value={this.state.lat} />
        </label>
        <label>Longitude
          <input
            disabled
            type='text'
            name='lng'
            onChange={this.handleChange}
            value={this.state.lng} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
});

module.exports = BenchForm;
