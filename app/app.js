var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div>Hello {this.props.name}</div>
    )
  }
});

ReactDOM.render(<Hello name="Matt" />, document.getElementById('app'));
