var React = require("react");
var Popular = require("./Popular");
//state --
//lifecycle event -- hooks you can tire in to so you know were your component is
// UI of the component
class App extends React.Component {
  render() {
    return (
      <div className='container' >
        <Popular />
      </div>
    );
  }
}

module.exports = App;
