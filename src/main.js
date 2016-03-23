var React = require('react');
var ReactDOM = require('react');
var Trianglify = require('trianglify');
import './stylesheets/main.scss';

var AppComponent = require('./HomePage.js');
ReactDOM.render(<AppComponent />, document.getElementById('main'));

var pattern = Trianglify({
  height: 800,
  width: 1400,
  cell_size: 40
});

var svg = pattern.svg();
var heroBg = document.getElementById('heroBg').appendChild(svg);