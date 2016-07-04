var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Search = require('./components/search');
var BenchForm = require('./components/bench_form');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Bench BnB</h1>
        {this.props.children}
      </div>
    )
  }
});

var appRouter = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='/benches/new' component={BenchForm} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(appRouter, document.getElementById('content'));
})
