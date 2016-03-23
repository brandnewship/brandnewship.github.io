var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
    <div>
      <div id="heroBg"></div>
      <h1>This is way coool</h1>
      <HeroSection />
    </div>
    );
  }
});

var HeroSection = React.createClass({
render: function() {
  return (
    <div>
    We are Brand New Ship
    </div>
  );
}
});








