var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <BodySection />
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <Menu />
        <HeroSection />
      </div>
    );
  }
});

var Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <a className="menu__title">Menu</a>
      </div>
    );
  }
});

var HeroSection = React.createClass({
  render: function() {
    return (
      <div className="hero">
        <div className="hero__title">
          <h1>Hand Crafted Digital Products</h1>
        </div>
        <h1>This is way coool</h1>
      </div>
    );
  }
});

var BodySection = React.createClass({
  render: function() {
    return (
      <div className="body">
        <div className="body__title">
          <h1>What we do</h1>
        </div>
        <p>This is body content</p>
      </div>
    );
  }
});









