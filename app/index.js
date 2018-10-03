var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state --
//lifecycle event -- hooks you can tire in to so you know were your component is
// UI of the component
class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app') )
